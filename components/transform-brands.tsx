import Image from "next/image";
import React from "react";
import brand1 from "../public/img/brand1.png";
import brand2 from "../public/img/brand2.png";
import brand3 from "../public/img/brand3.png";
import brand4 from "../public/img/brand4.png";
import brand5 from "../public/img/brand5.png";

const arr = [
  {
    id: 1,
    url: "https://cdn.prod.website-files.com/66e8a8b026884c743366629c/673cde5a6459b09d18f2f8f9_boosted.svg",
  },
  {
    id: 2,
    url: "https://cdn.prod.website-files.com/66e8a8b026884c743366629c/673cf79d5133db1be53f5f5a_cardiff-logo.svg",
  },
  {
    id: 3,
    url: "https://cdn.prod.website-files.com/66e8a8b026884c743366629c/673cdee71d72cbea7390cf74_black-diamond.svg",
  },
  {
    id: 4,
    url: "https://cdn.prod.website-files.com/66e8a8b026884c743366629c/673cde38370529d8fdafed56_rivian.svg",
  },
  {
    id: 5,
    url: "https://cdn.prod.website-files.com/66e8a8b026884c743366629c/673cded4b5de6062632bb46d_tesla.svg",
  },

  {
    id: 6,
    url: "https://cdn.prod.website-files.com/66e8a8b026884c743366629c/673cf7feeb17b395132e6c85_solarcity.svg",
  },
];

function TransformBrands() {
  return (
    <div className="flex">
      <div className="grid grid-cols-2 gap-3 w-130">
        {arr.map((item) => (
          <div
            className="bg-gray-200 items-center justify-center flex h-30"
            key={item.id}
          >
            {item.id > 2 ? (
              <Image src={item.url} alt="brand" width={90} height={90} />
            ) : (
              <Image src={item.url} alt="brand" width={60} height={60} />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center ml-15 gap-y-10">
        <h1 className="text-6xl">I transform brands</h1>
        <p className="w-130 text-2xl">
          From digital products to creative strategy—I define, design, and
          launch ideas that unlock hidden potential.
        </p>
        <button className="bg-orange-600 text-white rounded-full py-3 px-5 w-50">
          Meet Kyson
        </button>
      </div>
    </div>
  );
}

export default TransformBrands;
