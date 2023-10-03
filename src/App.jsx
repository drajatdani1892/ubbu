import { Chip } from "@nextui-org/react";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />
      {/* End of Navbar */}

      {/* Section Hero */}
      <section className="bg-slate-900 flex-grow relative pb-24" id="hero">
        <div className="pattern-box absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent"></div>
        <div className="container mx-auto px-6 flex relative">
          <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center mt-24">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-md">
                Begin Your Journey with
                <span className="ml-3 text-yellow-500">UBBU</span>
              </h1>
              <p className="text-lg mb-4 pe-0 lg:pe-11">
                "Embrace the challenge, be part of UBBU, and together, let's
                embark on a relentless journey to seize the ultimate glory!"
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-500/50 hover:ring-1 hover:ring-slate-200 text-white font-semibold py-2 px-4 rounded-lg">
                Let's Get Started
              </button>
            </div>
            <div className="w-full md:w-1/2 px-0 md:px-4">
              <img
                src="https://images.unsplash.com/photo-1612468552791-27742d57610b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Image"
                className="w-full max-h-80 object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero */}

      {/* Section Kegiatan */}
      <section className="bg-slate-900 py-12" id="kegiatan">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 md:gap-4">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Chip color="warning" variant="bordered">
                Our Activity
              </Chip>
              <h2 className="text-3xl font-semibold mb-2">Kegiatan UBBU</h2>
              <p className="text-gray-400">
                Berikut adalah kegiatan rutin yang dilaksanakan oleh UKM UBBU
              </p>
            </div>
            <div className="flex flex-col mt-8 md:flex-row md:justify-center gap-4">
              {/* Card */}
              <div className="card-features bg-slate-800 hover:outline hover:outline-offset-2 hover:outline-yellow-500 p-4 rounded-lg shadow-md text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-32 w-32 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">3x3 Competitions</h3>
                <p className="text-gray-400 mt-2">
                  UBBU mengadakan kompetisi 3x3 untuk lingkungan kampus, ini
                  akan menjadi pengalaman terbaik kamu dalam berkompetisi dan
                  berorganisasi
                </p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-800 hover:outline hover:outline-offset-2 hover:outline-yellow-500 p-4 rounded-lg shadow-md text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/2.jpg"
                  alt="Image Features"
                  className="h-32 w-32 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">Latihan Mingguan</h3>
                <p className="text-gray-400 mt-2">
                  UBBU memiliki jadwal latihan mingguan yang terstruktur,
                  membantu anggotanya meningkatkan keterampilan dan ketahanan
                  fisik pada basket.
                </p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-800 hover:outline hover:outline-offset-2 hover:outline-yellow-500 p-4 rounded-lg shadow-md text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/3.jpg"
                  alt="Image Features"
                  className="h-32 w-32 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">Latih tanding</h3>
                <p className="text-gray-400 mt-2">
                  UBBU memiliki agenda latih tanding dengan tim basket lainnya
                  yang membuat kamu merasakan pengalaman bertanding dengan tim
                  lain.
                </p>
              </div>
              {/* End of Card */}
            </div>
          </div>
        </div>
      </section>
      {/* End Of Kegiatan */}

      {/* Section Our Coach*/}
      <section className="bg-slate-900 py-12" id="kepengurusan">
        <div className="container mx-auto">
          <div className="flex gap-14 md:gap-4 flex-col-reverse md:flex-row md:justify-between mt-24">
            <div className="flex justify-center w-full md:w-1/2 px-0 md:px-4">
              <img
                src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Image"
                className="w-full max-h-96 max-w-sm object-cover rounded-md shadow-md outline outline-offset-4 outline-yellow-500 "
              />
            </div>
            <div className="flex gap-4 flex-col items-center md:items-start justify-center w-full md:w-1/2 text-center md:text-start">
              <Chip color="warning" variant="bordered">
                Our Coach
              </Chip>
              <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight max-w-md">
                John Doe,S.Pd.
              </h1>
              <p className="leading-7 max-w-sm md:max-w-lg">
                "Embrace the challenge, be part of UBBU, and together, let's
                embark on a relentless journey to seize the ultimate glory!"
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section Coach */}

      {/* Section Pengurus */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 md:gap-4">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Chip color="warning" variant="bordered">
                Organizational Structure
              </Chip>
              <h2 className="text-3xl font-semibold mb-2">
                Kepengurusan UBBU 2023/2024
              </h2>
              <p className="text-gray-400">
                Berikut adalah Kepengurusan UBBU tahun 2023/2024
              </p>
            </div>
            <div className="flex flex-col mt-8 md:flex-row md:justify-center gap-24 flex-wrap">
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
              {/* Card */}
              <div className="card-features bg-slate-900 p-4 rounded-lg text-center max-w-xs mx-auto md:mx-0">
                <img
                  src="/1.jpg"
                  alt="Image Features"
                  className="h-44 w-44 mx-auto rounded-full outline outline-yellow-500 outline-offset-4"
                />
                <h3 className="text-xl font-semibold mt-4">Annisa Azzahra</h3>
                <p className="text-gray-400 mt-2">Sekretaris</p>
              </div>
              {/* End of Card */}
            </div>
          </div>
        </div>
      </section>
      {/* End of Section Pengurus */}

      {/* Section Scan QR */}
      <section className="bg-yellow-500 py-12" id="qr">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left md:gap-32">
            <img
              src="https://media.istockphoto.com/id/1347277567/vector/qr-code-sample-for-smartphone-scanning-on-white-background.jpg?s=612x612&w=0&k=20&c=PYhWHZ7bMECGZ1fZzi_-is0rp4ZQ7abxbdH_fm8SP7Q="
              className="w-52 h-w-52 rounded-md"
              alt="image"
            />
            <div className="flex flex-col gap-4">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Join with US
              </h2>
              <p>Scan QR Code ini untuk melakukan pendaftaran</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Scan QR */}

      {/* Footer */}
      <footer className="bg-slate-900 py-4">
        <div className="container mx-auto text-center">
          <p>© 2023 DUIX | Made with ❤️ by Duix </p>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
  );
}

export default App;
