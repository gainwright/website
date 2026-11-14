import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteInteractions from "@/components/SiteInteractions";
import Hero from "@/components/sections/Hero";
import Hours from "@/components/sections/Hours";
import FirstCall from "@/components/sections/FirstCall";
import Ledgerwright from "@/components/sections/Ledgerwright";
import FittedWork from "@/components/sections/FittedWork";
import HowWeWork from "@/components/sections/HowWeWork";
import Studio from "@/components/sections/Studio";
import Guide from "@/components/sections/Guide";
import BookACall from "@/components/sections/BookACall";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hours />
        <FirstCall />
        <Ledgerwright />
        <FittedWork />
        <HowWeWork />
        <Studio />
        <Guide />
        <BookACall />
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
