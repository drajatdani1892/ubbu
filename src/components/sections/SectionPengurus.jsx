import React from "react";
import { Chip } from "@nextui-org/react";

export default function SectionPengurus() {
  return (
    <>
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
    </>
  );
}
