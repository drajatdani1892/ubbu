import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />
      {/* End of Navbar */}

      {/* Section Hero */}
      <section class="bg-slate-900 flex-grow relative pb-24">
        <div class="pattern-box absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent"></div>
        <div class="container mx-auto px-6 flex relative">
          <div class="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center mt-24">
            <div class="w-full md:w-1/2">
              <h1 class="text-4xl md:text-5xl font-bold mb-4 max-w-md">
                Begin Your Journey with
                <span class="ml-3 text-yellow-500">UBBU</span>
              </h1>
              <p class="text-lg mb-4 pe-0 lg:pe-11">
                "Embrace the challenge, be part of UBBU, and together, let's
                embark on a relentless journey to seize the ultimate glory!"
              </p>
              <button class="bg-yellow-500 hover:bg-yellow-500/50 hover:ring-1 hover:ring-slate-200 text-white font-semibold py-2 px-4 rounded-lg">
                Let's Get Started
              </button>
            </div>
            <div class="w-full md:w-1/2 px-0 md:px-4">
              <img
                src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Image"
                class="w-full max-h-80 object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero */}

      {/* Section Kegiatan */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2">Kegiatan UBBU</h2>
            <p className="text-gray-400">
              Berikut adalah kegiatan rutin yang dilaksanakan oleh UKM UBBU
            </p>
          </div>
          <div className="flex flex-col mt-8 md:flex-row md:justify-center gap-4">
            {/* Card */}
            <div className="card-features bg-slate-800 p-4 rounded-lg shadow-md text-center max-w-xs mx-auto md:mx-0">
              <img
                src="/1.jpg"
                alt="Image Features"
                className="h-32 w-32 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">3x3 Competitions</h3>
              <p className="text-gray-400 mt-2">
                Experience thrilling 3x3 basketball competitions with us.
              </p>
            </div>
            {/* End of Card */}
            {/* Card */}
            <div className="card-features bg-slate-800 p-4 rounded-lg shadow-md text-center max-w-xs mx-auto md:mx-0">
              <img
                src="/2.jpg"
                alt="Image Features"
                className="h-32 w-32 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">3x3 Competitions</h3>
              <p className="text-gray-400 mt-2">
                Experience thrilling 3x3 basketball competitions with us.
              </p>
            </div>
            {/* End of Card */}
            {/* Card */}
            <div className="card-features bg-slate-800 p-4 rounded-lg shadow-md text-center max-w-xs mx-auto md:mx-0">
              <img
                src="/3.jpg"
                alt="Image Features"
                className="h-32 w-32 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">3x3 Competitions</h3>
              <p className="text-gray-400 mt-2">
                Experience thrilling 3x3 basketball competitions with us.
              </p>
            </div>
            {/* End of Card */}
          </div>
        </div>
      </section>
      {/* End Of Kegiatan */}
    </div>
  );
}

export default App;
