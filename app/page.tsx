import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteInteractions from "@/components/SiteInteractions";
import Hero from "@/components/sections/Hero";
import Hours from "@/components/sections/Hours";
import FirstCall from "@/components/sections/FirstCall";
import Audit from "@/components/sections/Audit";
import FittedWork from "@/components/sections/FittedWork";
import Clients from "@/components/sections/Clients";
import HowWeWork from "@/components/sections/HowWeWork";
import Studio from "@/components/sections/Studio";
import BookACall from "@/components/sections/BookACall";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Studio />
        <Hours />
        <FirstCall />
        <Audit />
        <FittedWork />
        <Clients />
        <HowWeWork />
        <BookACall />
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
