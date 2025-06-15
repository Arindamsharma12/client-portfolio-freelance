import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
function Header() {
  return (
    <div className="flex m-7 justify-between items-center">
      <div className="flex gap-x-4">
        <Image src={logo} alt="logo" width={45} height={45} />
        <div>
          <h1 className="font-semibold text-gray-500 text-sm">Designer</h1>
          <p className="font-semibold text-sm">Kynson Dana</p>
        </div>
      </div>
      <div className="flex gap-8 text-md items-center mr-4">
        <h1>Work</h1>
        <h1>About</h1>
        <h1 className="bg-orange-600 p-1 px-4 rounded-full text-white">
          Work with me
        </h1>
      </div>
    </div>
  );
}

export default Header;
