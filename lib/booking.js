// The call booking form: answer chips, the seven questions, and the hand-off to the calendar.
// Used by the home page (through lib/site.js) and by the standalone /book page.

var FORM_ENDPOINT = "/api/contact"; // handled by app/api/contact/route.ts

export function send(payload){
  if (!FORM_ENDPOINT) return Promise.resolve(true);
  return fetch(FORM_ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)}).then(function(r){ return r.ok; }).catch(function(){ return false; });
}

let started = false;

export function initBooking() {
  if (started) return;
  started = true;

  /* copy email */
  function copyText(txt, btn){
    var done = function(){ var o=btn.textContent; btn.textContent="Copied"; setTimeout(function(){ btn.textContent=o; },1600); };
    if (navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(done, function(){ selectFallback(); }); } else { selectFallback(); }
    function selectFallback(){ var el=document.getElementById("emailText"); var r=document.createRange(); r.selectNodeContents(el); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); done(); }
  }
  var copyBtn=document.getElementById("copyEmail"); if (copyBtn) copyBtn.addEventListener("click", function(){ copyText("hello@gainwright.ai", this); });

  /* chips: one answer per group, or several where the group is marked data-multi */
  document.querySelectorAll(".chips").forEach(function(g){
    var multi = g.hasAttribute("data-multi");
    g.querySelectorAll("button").forEach(function(b){ b.addEventListener("click", function(){
      if (multi) b.setAttribute("aria-pressed", b.getAttribute("aria-pressed")==="true"?"false":"true");
      else { g.querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed","false"); }); b.setAttribute("aria-pressed","true"); }
      // a chip such as "Something else" can reveal a text box for the detail
      g.querySelectorAll("[data-other]").forEach(function(x){ var box=document.getElementById(x.getAttribute("data-other")); box.hidden = x.getAttribute("aria-pressed")!=="true"; if(x===b && !box.hidden) box.focus(); });
    }); });
  });
  // the detail box only counts while its chip is selected
  function otherText(id){ var box=document.getElementById(id); return box.hidden ? "" : box.value; }
  function chipValues(name){ var g=document.querySelector('.chips[data-name="'+name+'"]'); return g ? Array.prototype.map.call(g.querySelectorAll('[aria-pressed="true"]'), function(b){ return b.textContent.trim(); }) : []; }

  // The call booking: seven questions, sent to us, then on to the calendar with name and email filled in.
  var aform=document.getElementById("applyForm"), adone=document.getElementById("applyDone"), aerr=document.getElementById("applyErr");
  if (!aform) return; // the home page has no form, only the /book page does
  // question 1 grows with the answer, for browsers without field-sizing
  var about=document.getElementById("fAbout"); about.addEventListener("input", function(){ about.style.height="auto"; about.style.height=about.scrollHeight+"px"; });
  var groups=[["time",2],["never",3],["week",4],["tried",5],["systems",6],["budget",7]];
  function settle(ev){ var f=ev.target.closest(".field.bad"); if(!f) return; f.classList.remove("bad"); var m=f.querySelector(".field-err"); if(m) m.remove(); if(!aform.querySelector(".field.bad")) aerr.hidden=true; }
  aform.addEventListener("input", settle); aform.addEventListener("click", function(ev){ if(ev.target.closest(".chips button")) settle(ev); });
  aform.addEventListener("submit", function(e){ e.preventDefault();
    aerr.hidden=true;
    // Mark every missing answer where it is, say what is missing, and list them by the button.
    var missing=[], first=null;
    function fieldOf(el){ return el.closest(".field"); }
    function clearErr(f){ f.classList.remove("bad"); var m=f.querySelector(".field-err"); if(m) m.remove(); }
    function markErr(f, msg, label){ clearErr(f); f.classList.add("bad"); var m=document.createElement("p"); m.className="field-err"; m.textContent=msg; f.appendChild(m); missing.push(label); if(!first) first=f; }
    aform.querySelectorAll(".field.bad").forEach(clearErr);
    var texts=[["fName","Add your name.","your name"],["fEmail","Add your email address.","your email"],["fCo","Add the name of your business.","your business"],["fAbout","Tell us what the business does and roughly how many people work in it.","question 1"]];
    texts.forEach(function(t){ var el=document.getElementById(t[0]), v=el.value.trim();
      if(!v) markErr(fieldOf(el), t[1], t[2]);
      else if(t[0]==="fEmail" && !el.checkValidity()) markErr(fieldOf(el), "That email address does not look right.", "your email");
    });
    groups.forEach(function(g){ var box=document.querySelector('.chips[data-name="'+g[0]+'"]');
      if(!chipValues(g[0]).length) markErr(fieldOf(box), box.hasAttribute("data-multi") ? "Pick at least one." : "Pick one.", "question "+g[1]);
    });
    if(missing.length){
      aerr.textContent=(missing.length===1 ? "One answer is missing: " : missing.length+" answers are missing: ")+missing.join(", ")+".";
      aerr.hidden=false;
      first.scrollIntoView({behavior:"smooth",block:"center"});
      var focusEl=first.querySelector("input:not([hidden]),textarea"); if(focusEl) focusEl.focus({preventScroll:true});
      return;
    }
    var name=document.getElementById("fName").value, email=document.getElementById("fEmail").value;
    var payload={type:"call-request", name:name, email:email, company:document.getElementById("fCo").value, about:document.getElementById("fAbout").value, time:chipValues("time"), timeOther:otherText("fTimeOther"), never:chipValues("never")[0], neverOther:otherText("fNeverOther"), week:chipValues("week")[0], tried:chipValues("tried"), triedOther:otherText("fTriedOther"), systems:chipValues("systems"), systemsOther:otherText("fSysOther"), budget:chipValues("budget")[0]};
    var link=document.getElementById("bookLink"), url=link.getAttribute("href")+"?name="+encodeURIComponent(name)+"&email="+encodeURIComponent(email);
    link.setAttribute("href", url);
    var btn=aform.querySelector('button[type="submit"]'); btn.disabled=true;
    send(payload).then(function(ok){ Array.prototype.forEach.call(aform.children, function(c){ if(c!==adone) c.hidden=true; }); adone.hidden=false;
      // If our copy of the answers did not send, they can still book; we ask on the call instead.
      if(!ok){ adone.querySelector(".mono").textContent="Not sent"; adone.querySelector(".verdict").textContent="Your answers did not reach us, but you can still pick a time."; }
      // The calendar opens here on the page, with name and email already filled in.
      var cal=document.getElementById("bookCal"), frame=document.createElement("iframe");
      frame.title="Pick a time for your 20 minute call"; frame.loading="eager";
      // The calendar uses the site's light colours on both themes: on a dark background Calendly's
      // guest email box shows dark text on dark, so what people type cannot be read.
      frame.src=url+"&embed_domain="+encodeURIComponent(window.location.hostname)+"&embed_type=Inline&hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=1d2124&primary_color=1f4fd1";
      cal.appendChild(frame); cal.hidden=false;
      // Calendly reports its own height, so the calendar never needs a scrollbar of its own.
      window.addEventListener("message", function(ev){ if(ev.origin!=="https://calendly.com" || !ev.data || ev.data.event!=="calendly.page_height") return; var h=parseInt(ev.data.payload && ev.data.payload.height, 10); if(h>0) frame.style.height=h+"px"; });
      adone.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
}
