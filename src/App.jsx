import Header from "./components/Header";
import SectionHero from "./components/sections/SectionHero";
import SectionKegiatan from "./components/sections/SectionKegiatan";
import SectionOurCoach from "./components/sections/SectionOurCoach";
import SectionPengurus from "./components/sections/SectionPengurus";
import SectionQR from "./components/sections/SectionQR";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />
      {/* End of Navbar */}

      {/* Section Hero */}
      <SectionHero />
      {/* End of Hero */}

      {/* Section Kegiatan */}
      <SectionKegiatan />
      {/* End Of Kegiatan */}

      {/* Section Our Coach*/}
      <SectionOurCoach />
      {/* End of Section Coach */}

      {/* Section Pengurus */}
      <SectionPengurus />
      {/* End of Section Pengurus */}

      {/* Section Scan QR */}
      <SectionQR />
      {/* End of Scan QR */}

      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </div>
  );
}

export default App;
