import React from "react";
import { Chip } from "@nextui-org/react";

export default function SectionOurCoach() {
  return (
    <>
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
    </>
  );
}
