// The page's interactive behaviour, carried over unchanged from the original single-file site.
// It works directly on the server-rendered markup, so the section components stay plain markup.
import * as THREE from "three";

let started = false;

export function initSite() {
  if (started) return;
  started = true;

  // React does not write the muted attribute into server HTML, so make sure the band film can autoplay.
  var film = document.querySelector(".band video");
  if (film) { film.muted = true; var p = film.play(); if (p && p.catch) p.catch(function(){}); }

  var FORM_ENDPOINT = "/api/contact"; // handled by app/api/contact/route.ts
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* theme */
  var themeBtn = document.getElementById("themeBtn");
  function isDark(){ var t=root.getAttribute("data-theme"); if(t) return t==="dark"; return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; }
  function setTheme(d){ root.setAttribute("data-theme", d?"dark":"light"); try{localStorage.setItem("gw-theme", d?"dark":"light");}catch(e){} window.dispatchEvent(new Event("gw-theme")); }
  try{ var saved=localStorage.getItem("gw-theme"); if(saved) root.setAttribute("data-theme", saved); }catch(e){}
  themeBtn.addEventListener("click", function(){ setTheme(!isDark()); });

  /* menu */
  var hdr = document.querySelector(".hdr"), menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", function(){ var o = hdr.getAttribute("data-open")==="true"; hdr.setAttribute("data-open", o?"false":"true"); menuBtn.setAttribute("aria-expanded", o?"false":"true"); });
  document.querySelectorAll(".nav a").forEach(function(a){ a.addEventListener("click", function(){ hdr.setAttribute("data-open","false"); menuBtn.setAttribute("aria-expanded","false"); }); });

  /* current section in nav */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var secs = navLinks.map(function(a){ return document.querySelector(a.getAttribute("href")); });
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ navLinks.forEach(function(a){ a.removeAttribute("aria-current"); }); var i = secs.indexOf(e.target); if(i>-1) navLinks[i].setAttribute("aria-current","true"); } }); }, {rootMargin:"-40% 0px -55% 0px"});
    secs.forEach(function(s){ if(s) io.observe(s); });
  }

  /* copy email */
  function copyText(txt, btn){
    var done = function(){ var o=btn.textContent; btn.textContent="Copied"; setTimeout(function(){ btn.textContent=o; },1600); };
    if (navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(done, function(){ selectFallback(); }); } else { selectFallback(); }
    function selectFallback(){ var el=document.getElementById("emailText"); var r=document.createRange(); r.selectNodeContents(el); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); done(); }
  }
  document.getElementById("copyEmail").addEventListener("click", function(){ copyText("hello@gainwright.ai", this); });

  /* chips */
  document.querySelectorAll(".chips").forEach(function(g){
    g.querySelectorAll("button").forEach(function(b){ b.addEventListener("click", function(){ g.querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed","false"); }); b.setAttribute("aria-pressed","true"); }); });
  });
  function chipValue(name){ var g=document.querySelector('.chips[data-name="'+name+'"]'); var b=g&&g.querySelector('[aria-pressed="true"]'); return b ? (b.getAttribute("data-val")||b.textContent) : ""; }
  function pressChip(name, val){ var g=document.querySelector('.chips[data-name="'+name+'"]'); if(!g) return; g.querySelectorAll("button").forEach(function(b){ b.setAttribute("aria-pressed", (b.getAttribute("data-val")===val)?"true":"false"); }); }
  document.querySelectorAll("[data-intent]").forEach(function(a){ a.addEventListener("click", function(){ pressChip("interest", a.getAttribute("data-intent")); }); });

  /* scorecard */
  var qs = Array.prototype.slice.call(document.querySelectorAll("#qs .q"));
  var bar = document.getElementById("scoreBar"), verdict = document.getElementById("verdict"), vsub = document.getElementById("verdictSub"), sform = document.getElementById("scoreForm"), sdone = document.getElementById("scoreDone");
  var verdicts = [
    ["Tighter than most.", "Two or fewer and you are already running a disciplined shop. Here is what we would fit for the ones you ticked."],
    ["There are hours on the table.", "Three to five is where most established businesses sit. Here are the jobs we would fit, in the order you ticked them. The call puts a rough figure on the one costing you most."],
    ["This is where the money is.", "Six or more means the business is carrying work a fitted agent could be doing before anyone is in. Here is the list. The call puts a rough figure on the one costing you most."]
  ];
  function score(){
    var answered=0, yes=0;
    qs.forEach(function(q){ var y=q.querySelector(".yes").getAttribute("aria-pressed")==="true", n=q.querySelector(".no").getAttribute("aria-pressed")==="true"; if(y||n) answered++; if(y) yes++; });
    bar.style.width = (yes/qs.length*100)+"%";
    if (answered<qs.length){ verdict.firstChild.textContent = answered===0 ? "Answer the eight and we'll tell you what it suggests." : (qs.length-answered)+" to go."; vsub.textContent=""; sform.hidden=true; document.getElementById("jobList").hidden=true; document.getElementById("scoreApply").hidden=true; return; }
    var v = yes<=2 ? verdicts[0] : yes<=5 ? verdicts[1] : verdicts[2];
    verdict.firstChild.textContent = yes+" of 8. "+v[0]; vsub.textContent = v[1]; var jl=document.getElementById("jobList"); jl.innerHTML=""; qs.forEach(function(q){ if(q.querySelector(".yes").getAttribute("aria-pressed")==="true"){ var li=document.createElement("li"); li.textContent=q.getAttribute("data-job"); jl.appendChild(li);} }); jl.hidden = yes===0; sform.hidden = sdone.hidden ? false : true; document.getElementById("scoreApply").hidden=false;
  }
  qs.forEach(function(q){ q.querySelectorAll(".yn button").forEach(function(b){ b.addEventListener("click", function(){ q.querySelectorAll(".yn button").forEach(function(x){ x.setAttribute("aria-pressed","false"); }); b.setAttribute("aria-pressed","true"); score(); }); }); });

  /* forms */
  function send(payload){
    if (!FORM_ENDPOINT) return Promise.resolve(true);
    return fetch(FORM_ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)}).then(function(r){ return r.ok; }).catch(function(){ return false; });
  }
  sform.addEventListener("submit", function(e){ e.preventDefault(); var em=document.getElementById("scoreEmail"); if(!em.checkValidity()){ em.reportValidity(); return; }
    var yes = qs.filter(function(q){ return q.querySelector(".yes").getAttribute("aria-pressed")==="true"; }).length;
    send({type:"scorecard", email:em.value, score:yes, jobs:qs.filter(function(q){ return q.querySelector(".yes").getAttribute("aria-pressed")==="true"; }).map(function(q){ return q.getAttribute("data-job"); })}).then(function(ok){ sform.hidden=true; sdone.hidden=false; sdone.className="mono ok"; sdone.textContent = ok ? "Sent. Check your inbox, and your spam folder once." : "We could not send that just now. Email hello@gainwright.ai and we will reply by hand."; });
  });
  var aform=document.getElementById("applyForm"), adone=document.getElementById("applyDone");
  aform.addEventListener("submit", function(e){ e.preventDefault();
    var req=["fName","fEmail","fCo"]; for (var i=0;i<req.length;i++){ var el=document.getElementById(req[i]); if(!el.checkValidity()){ el.reportValidity(); return; } }
    var payload={type:"call-request", name:document.getElementById("fName").value, email:document.getElementById("fEmail").value, company:document.getElementById("fCo").value, website:document.getElementById("fWeb").value, turnover:chipValue("turnover"), interest:chipValue("interest"), books:chipValue("books"), hours:document.getElementById("fHours").value, when:document.getElementById("fWhen").value, heard:document.getElementById("fHeard").value};
    send(payload).then(function(ok){ Array.prototype.forEach.call(aform.children, function(c){ if(c!==adone) c.hidden=true; }); adone.hidden=false; if(!ok){ adone.querySelector(".mono").textContent="Not sent"; adone.querySelector(".verdict").textContent="We could not send that just now."; } adone.scrollIntoView({behavior:"smooth",block:"center"}); });
  });



  /* detail layer */
  var folds=Array.prototype.slice.call(document.querySelectorAll("details.fold, details.wk"));
  var detailBtn=document.getElementById("detailBtn");
  function label(){ detailBtn.querySelector("span").textContent = detailBtn.getAttribute("aria-pressed")==="true" ? "Hide all detail" : "Show all detail"; }
  function setAll(open){ folds.forEach(function(d){ d.open=open; }); detailBtn.setAttribute("aria-pressed", open?"true":"false"); label(); }
  detailBtn.addEventListener("click", function(){ setAll(detailBtn.getAttribute("aria-pressed")!=="true"); });
  folds.forEach(function(d){ d.addEventListener("toggle", function(){ var allOpen=folds.every(function(x){ return x.open; }); detailBtn.setAttribute("aria-pressed", allOpen?"true":"false"); label(); }); });

  /* the hours calculator */
  var hrs=document.getElementById("cHours"), rate=document.getElementById("cRate");
  var whose=Array.prototype.slice.call(document.querySelectorAll(".whose button"));
  function gbp(n){ return "£"+Math.round(n).toLocaleString("en-GB"); }
  function calc(){
    var h=+hrs.value, r=+rate.value;
    document.getElementById("vHours").textContent=h+" hrs";
    document.getElementById("vRate").textContent="£"+r+" an hour";
    var yearH=h*48, days=Math.round(yearH/8), weeks=Math.round(yearH/40);
    document.getElementById("oHoursBig").textContent=yearH.toLocaleString("en-GB")+" hrs";
    document.getElementById("oHours").textContent=days+" working days · "+weeks+" week"+(weeks===1?"":"s")+" of one person";
    document.getElementById("oCost").textContent=gbp(yearH*r);
    document.getElementById("oHalf").textContent=gbp(yearH*r/2);
    whose.forEach(function(b){ b.setAttribute("aria-pressed", (+b.getAttribute("data-rate")===r)?"true":"false"); });
  }
  [hrs,rate].forEach(function(el){ el.addEventListener("input", calc); });
  whose.forEach(function(b){ b.addEventListener("click", function(){ rate.value=b.getAttribute("data-rate"); calc(); }); });
  calc();

  /* footer wordmark: fit to the container width so it never clips */
  (function(){ var el=document.getElementById("ftrWord"); if(!el) return; function fit(){ var parent=el.parentElement; var avail=parent.clientWidth; if(!avail) return; el.style.fontSize=""; var fs=parseFloat(getComputedStyle(el).fontSize); var w=el.scrollWidth; if(w>avail){ el.style.fontSize=(fs*avail/w*0.985)+"px"; } } fit(); window.addEventListener("resize", fit); if(document.fonts && document.fonts.ready) document.fonts.ready.then(fit); })();
  /* 3D model */
  var host=document.getElementById("model");
  function css(name){ return getComputedStyle(root).getPropertyValue(name).trim(); }
  var THREE_OK = typeof THREE !== "undefined";
  var gl = (function(){ try{ var c=document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl")||c.getContext("experimental-webgl"))); }catch(e){ return false; } })();
  if (!THREE_OK || !gl){ host.setAttribute("data-fallback","true"); return; }

  var renderer=new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  host.appendChild(renderer.domElement);
  var scene=new THREE.Scene();
  var camera=new THREE.PerspectiveCamera(20, 4/3, 0.1, 100);
  camera.position.set(11.5, 9.2, 11.5); camera.lookAt(0, 0.35, 0);
  var rig=new THREE.Group(); scene.add(rig);

  var hemi=new THREE.HemisphereLight(0xffffff, 0x8899aa, 0.85); scene.add(hemi);
  var sun=new THREE.DirectionalLight(0xffffff, 0.9); sun.position.set(6, 10, 4); sun.castShadow=true;
  sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left=-7; sun.shadow.camera.right=7; sun.shadow.camera.top=7; sun.shadow.camera.bottom=-7; sun.shadow.camera.near=1; sun.shadow.camera.far=30; sun.shadow.bias=-0.0008; scene.add(sun);

  var matGround=new THREE.ShadowMaterial({opacity:0.18});
  var ground=new THREE.Mesh(new THREE.PlaneGeometry(14,14), matGround); ground.rotation.x=-Math.PI/2; ground.position.y=0; ground.receiveShadow=true; rig.add(ground);
  var plateGeo=new THREE.BoxGeometry(7.2, 0.12, 5.6);
  var plate=new THREE.Mesh(plateGeo, new THREE.MeshLambertMaterial({color:0xffffff})); plate.position.y=-0.06; plate.receiveShadow=true; rig.add(plate);
  var matPlateEdge=new THREE.LineBasicMaterial({color:0x1d2124, transparent:true, opacity:0.5});
  var plateEdge=new THREE.LineSegments(new THREE.EdgesGeometry(plateGeo), matPlateEdge); plate.add(plateEdge);
  // faint plan grid drawn on the plate as thin lines
  var gridMat=new THREE.LineBasicMaterial({color:0x1f4fd1, transparent:true, opacity:0.10});
  (function(){ var pts=[]; for(var x=-3.2;x<=3.2001;x+=0.8){ pts.push(new THREE.Vector3(x,0.002,-2.8), new THREE.Vector3(x,0.002,2.8)); } for(var z=-2.4;z<=2.4001;z+=0.8){ pts.push(new THREE.Vector3(-3.6,0.002,z), new THREE.Vector3(3.6,0.002,z)); } var g=new THREE.BufferGeometry().setFromPoints(pts); rig.add(new THREE.LineSegments(g, gridMat)); })();

  var matBlock=new THREE.MeshLambertMaterial({color:0xffffff});
  var matAgent=new THREE.MeshLambertMaterial({color:0x1f4fd1});
  var matLine=new THREE.LineBasicMaterial({color:0x1f4fd1, transparent:true, opacity:0.95});
  var matEdge=new THREE.LineBasicMaterial({color:0x1d2124, transparent:true, opacity:0.35});

  // systems: name, x, z, w, h, d
  var systems=[
    ["Accounts", -2.3, -1.4, 1.5, 1.15, 1.1],
    ["Inbox", -2.3, 1.1, 1.3, 0.75, 1.3],
    ["CRM", 0.0, -1.75, 1.3, 0.9, 1.0],
    ["Sheets", 2.3, -1.3, 1.4, 0.6, 1.2],
    ["Calendar", 2.3, 1.2, 1.1, 0.5, 1.1],
    ["Files", 0.1, 1.75, 1.6, 0.7, 0.9]
  ];
  var blocks=[], labels=[];
  systems.forEach(function(s){
    var g=new THREE.BoxGeometry(s[3], s[4], s[5]);
    var m=new THREE.Mesh(g, matBlock.clone()); m.position.set(s[1], s[4]/2, s[2]); m.castShadow=true; m.receiveShadow=true; rig.add(m);
    var e=new THREE.LineSegments(new THREE.EdgesGeometry(g), matEdge); m.add(e);
    blocks.push({mesh:m, base:{x:s[1], z:s[2]}, found:{x:s[1]*1.22, z:s[2]*1.22}, h:s[4]});
    var l=document.createElement("div"); l.className="lbl on"; l.textContent=s[0]; host.appendChild(l); labels.push(l);
  });
  var agentH=1.7;
  var agentGeo=new THREE.BoxGeometry(0.95, agentH, 0.95);
  var agent=new THREE.Mesh(agentGeo, matAgent); agent.castShadow=true; agent.position.set(0, agentH/2, 0); rig.add(agent);
  var agentLbl=document.createElement("div"); agentLbl.className="lbl ac on"; agentLbl.textContent="Gainwright agent"; host.appendChild(agentLbl);

  // conduits: cobalt channels on the plate from the agent to each block, run x first then z, like services on a plan
  var links=[];
  blocks.forEach(function(b){
    var grp=new THREE.Group(); rig.add(grp);
    var mx=new THREE.Mesh(new THREE.BoxGeometry(1,0.05,0.09), matAgent); mx.position.y=0.03; grp.add(mx);
    var mz=new THREE.Mesh(new THREE.BoxGeometry(0.09,0.05,1), matAgent); mz.position.y=0.03; grp.add(mz);
    var pad=new THREE.Mesh(new THREE.BoxGeometry(0.22,0.06,0.22), matAgent); pad.position.y=0.03; grp.add(pad);
    links.push({grp:grp, mx:mx, mz:mz, pad:pad});
  });
  function layLink(L, x, z, t){
    // from agent edge toward block: horizontal run along x at z=0, then along z to the block
    var sx = x>0?1:-1, sz = z>0?1:-1;
    var x0 = sx*0.48, lenX = Math.max(0.001, Math.abs(x)-0.48);
    L.mx.scale.x = lenX*t; L.mx.position.set(x0 + sx*lenX*t/2, 0.03, 0);
    var lenZ = Math.max(0.001, Math.abs(z));
    L.mz.scale.z = lenZ*Math.max(0,(t-0.5)*2); L.mz.position.set(x, 0.03, sz*lenZ*Math.max(0,(t-0.5)*2)/2);
    L.pad.position.set(x, 0.03, z); L.pad.visible = t>0.95;
    L.grp.visible = t>0.02;
  }

  // theme colours
  function hex(v){ return new THREE.Color(v); }
  function applyTheme(){
    var dark=isDark();
    var blockC = hex(css("--model-block")||"#f7f8f9"), edgeC = dark?0xeaf1ff:0x1d2124, acc = hex(css("--accent")||"#1f4fd1");
    blocks.forEach(function(b){ b.mesh.material.color.copy(blockC); });
    plate.material.color.copy(hex(dark?"#0f2d66":"#ffffff"));
    matEdge.color.setHex(edgeC); matEdge.opacity = dark?0.45:0.35;
    matPlateEdge.color.setHex(edgeC); matPlateEdge.opacity = dark?0.5:0.45;
    matAgent.color.copy(acc); matLine.color.copy(acc);
    gridMat.color.copy(acc); gridMat.opacity = dark?0.16:0.10;
    matGround.opacity = parseFloat(css("--model-shadow")||"0.18");
    hemi.intensity = dark?0.65:0.85; sun.intensity = dark?0.7:0.9;
  }
  applyTheme();
  window.addEventListener("gw-theme", applyTheme);
  if (window.matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);

  // state
  var fitted=1, target=1; // 1 = fitted, 0 = found
  document.querySelectorAll('.seg button[data-state]').forEach(function(b){ b.addEventListener("click", function(){ document.querySelectorAll('.seg button[data-state]').forEach(function(x){ x.setAttribute("aria-pressed","false"); }); b.setAttribute("aria-pressed","true"); target = b.getAttribute("data-state")==="fitted"?1:0; }); });

  // spin and drag
  var spin=!reduce, spinBtn=document.getElementById("spinBtn");
  spinBtn.setAttribute("aria-pressed", spin?"true":"false"); spinBtn.querySelector("span").textContent = spin?"Turning · drag to look":"Paused · drag to look";
  spinBtn.addEventListener("click", function(){ spin=!spin; spinBtn.setAttribute("aria-pressed", spin?"true":"false"); spinBtn.querySelector("span").textContent = spin?"Turning · drag to look":"Paused · drag to look"; });
  var rotY=-0.35, rotTargetY=-0.35, dragging=false, lastX=0, lastT=0;
  var cv=renderer.domElement;
  cv.addEventListener("pointerdown", function(e){ dragging=true; lastX=e.clientX; lastT=performance.now(); cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("pointermove", function(e){ if(!dragging) return; var dx=e.clientX-lastX; lastX=e.clientX; rotTargetY += dx*0.008; rotY = rotTargetY; });
  function endDrag(e){ dragging=false; }
  cv.addEventListener("pointerup", endDrag); cv.addEventListener("pointercancel", endDrag);

  function resize(){ var w=host.clientWidth, h=host.clientHeight; if(!w||!h) return; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); }
  resize(); window.addEventListener("resize", resize);
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(host);

  var v=new THREE.Vector3();
  function place(label, pos){ v.copy(pos); rig.localToWorld(v); v.project(camera); var w=host.clientWidth, h=host.clientHeight; var x=(v.x*0.5+0.5)*w, y=(-v.y*0.5+0.5)*h; label.style.left=x+"px"; label.style.top=(y-6)+"px"; }

  var visible=true;
  if ("IntersectionObserver" in window) new IntersectionObserver(function(es){ es.forEach(function(e){ visible=e.isIntersecting; }); }).observe(host);
  var last=performance.now();
  function frame(now){
    requestAnimationFrame(frame);
    var dt=Math.min(0.05,(now-last)/1000); last=now;
    if (!visible) return;
    if (spin && !dragging) rotTargetY += dt*0.10;
    rotY += (rotTargetY-rotY)*0.12;
    rig.rotation.y = rotY;
    fitted += (target-fitted)*(reduce?1:0.06);
    var t=fitted;
    blocks.forEach(function(b,i){
      var x=b.found.x+(b.base.x-b.found.x)*t, z=b.found.z+(b.base.z-b.found.z)*t;
      b.mesh.position.x=x; b.mesh.position.z=z;
      layLink(links[i], x, z, Math.max(0, Math.min(1, (t-0.15)/0.85)));
      place(labels[i], new THREE.Vector3(x, b.h+0.05, z));
    });
    var ay=(agentH/2) - (1-t)*(agentH+0.4);
    agent.position.y=ay; agent.visible = t>0.02;
    place(agentLbl, new THREE.Vector3(0, Math.max(0,ay+agentH/2)+0.32, 0));
    agentLbl.classList.toggle("on", t>0.6);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
