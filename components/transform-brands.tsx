import Image from "next/image";
import React from "react";

import logoBw1 from "../public/logos/B&W/Fortis.png";
import logoBw2 from "../public/logos/B&W/Ideally.png";
import logoBw3 from "../public/logos/B&W/THDC.png";
import logoBw4 from "../public/logos/B&W/kotak mahindra bank.png";
import logoBw5 from "../public/logos/B&W/metroworld.png";
import logoBw6 from "../public/logos/B&W/sandoz.png";

import logoColor1 from "../public/logos/colored/Fortis.png";
import logoColor2 from "../public/logos/colored/Ideally.png";
import logoColor3 from "../public/logos/colored/THDC.png";
import logoColor4 from "../public/logos/colored/kotak mahindra bank.png";
import logoColor5 from "../public/logos/colored/metroworld.png";
import logoColor6 from "../public/logos/colored/sandoz.png";

const logos = [
  { id: 1, bw: logoBw1, color: logoColor1, alt: "Fortis Logo" },
  { id: 2, bw: logoBw2, color: logoColor2, alt: "Ideally Logo" },
  { id: 3, bw: logoBw3, color: logoColor3, alt: "THDC Logo" },
  { id: 4, bw: logoBw4, color: logoColor4, alt: "Kotak Mahindra Bank Logo" },
  { id: 5, bw: logoBw5, color: logoColor5, alt: "Metroworld Logo" },
  { id: 6, bw: logoBw6, color: logoColor6, alt: "Sandoz Logo" },
];

function TransformBrands() {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:flex-row md:items-start">
      {/* Logos Grid */}
      <div className="grid w-full grid-cols-2 gap-4 sm:w-auto lg:grid-cols-2 xl:grid-cols-3">
        {" "}
        {logos.map((logo) => {
          // Adjust logo size dynamically, you might want to make this responsive as well
          // For simplicity, keeping original logic, but consider
          // smaller sizes for small screens if images are large.
          const logoSize = logo.id > 4 ? 200 : 160;

          return (
            <div
              key={logo.id}
              className="group relative flex h-40 cursor-pointer items-center justify-center rounded-lg bg-gray-200"
            >
              <div
                className="relative"
                style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
              >
                <Image
                  src={logo.bw}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <Image
                  src={logo.color}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Text Content */}
      <div className="mt-10 flex flex-col items-center gap-y-6 text-center md:ml-15 md:mt-0 md:items-start md:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Who I've Built With
        </h1>{" "}
        <p className="w-full text-base text-gray-600 sm:text-lg md:w-130 md:text-xl lg:text-2xl">
          {" "}
          Over the years, I've had the chance to work with some incredible teams
          across industries, countries, scales, and ambition.
        </p>
        <button className="w-50 rounded-full bg-orange-600 py-3 px-5 text-white transition-transform hover:scale-105">
          Meet Ash!
        </button>
      </div>
    </div>
  );
}

export default TransformBrands;
