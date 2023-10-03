import React from "react";

export default function SectionQR() {
  return (
    <>
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
    </>
  );
}
