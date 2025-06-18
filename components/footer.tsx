import { MoveRight } from "lucide-react";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-35">
      <div className="flex justify-between container items-center text-white hover:pr-10 cursor-pointer bg-orange-600 p-6 rounded-xl">
        <h1 className="text-7xl">Work with me</h1>
        <MoveRight size={80} />
      </div>
      <div className="text-white bg-[#161616] my-6 p-15 rounded-xl">
        <h1 className="text-7xl">Connect</h1>
        <div className="flex gap-x-40">
          <div>
            <h1 className="text-2xl my-10">Contact</h1>
            <p className="text-gray-400 ">Santa Cruz, CA</p>
            <p className="text-gray-400">kysondana@gmail.com</p>
            <div className="flex gap-x-4 mt-4">
              <div className="rounded-full bg-[#3e3e3e] p-2">
                <IoLogoLinkedin size={30} />
              </div>
              <div className="rounded-full bg-[#3e3e3e] p-2">
                <FaInstagram size={30} />
              </div>
              <div className="rounded-full bg-[#3e3e3e] p-2">
                <FaYoutube size={30} />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl my-10">Newsletter</h1>
            <p className="w-120 text-gray-400">
              Weekly writings exploring creativity, design, and the hidden
              patterns shaping how we think and make.
            </p>
            <form className="flex items-center bg-[#3e3e3e] rounded-full overflow-hidden p-1 mt-4">
              <input
                type="text"
                placeholder="First name"
                className="bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2 flex-grow"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2 flex-grow border-l border-gray-600"
              />
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 px-8 rounded-full ml-2 focus:outline-none focus:ring-2 cursor-pointer focus:ring-red-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
