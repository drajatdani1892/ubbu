import React from "react";

export default function SectionHero() {
  return (
    <>
      <section className="bg-slate-900 flex-grow relative pb-24" id="hero">
        <div className="pattern-box absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent"></div>
        <div className="container mx-auto px-6 flex relative">
          <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center mt-24">
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
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
    </>
  );
}
