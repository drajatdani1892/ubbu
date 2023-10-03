import React from "react";
import { Chip } from "@nextui-org/react";

export default function SectionKegiatan() {
  return (
    <>
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
    </>
  );
}
