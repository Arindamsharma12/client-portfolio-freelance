import { MoveRight } from "lucide-react";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-35">
      {/* Work with me section - Padding adjusted */}
      <div className="group flex cursor-pointer items-center justify-between rounded-xl bg-orange-600 p-6 text-white transition-all hover:pr-8 md:p-7 lg:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          Work with me
        </h1>
        <MoveRight
          size={40}
          className="transition-transform group-hover:translate-x-2 md:size-60 lg:size-80"
        />
      </div>

      {/* Connect section */}
      <div className="my-6 rounded-xl bg-[#161616] p-6 text-white sm:p-8 md:p-10 lg:p-15">
        <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Connect
        </h1>
        <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-20 lg:gap-x-40">
          {/* Contact Info */}
          <div>
            <h1 className="my-6 text-xl sm:text-2xl md:my-10">Contact</h1>
            <p className="text-sm text-gray-400 sm:text-base">Delhi, IN</p>
            {/* Added anchor tag for email */}
            <p>
              <a
                href="mailto:hello@ashtilization.com"
                className="text-sm text-gray-400 hover:text-white transition-colors sm:text-base"
              >
                hello@ashtilization.com
              </a>
            </p>
            <div className="mt-4 flex gap-x-4">
              <div className="rounded-full bg-[#3e3e3e] p-2">
                <IoLogoLinkedin size={20} className="size-5 sm:size-6" />
              </div>
              <div className="rounded-full bg-[#3e3e3e] p-2">
                <FaInstagram size={20} className="size-5 sm:size-6" />
              </div>
              <div className="rounded-full bg-[#3e3e3e] p-2">
                <FaYoutube size={20} className="size-5 sm:size-6" />
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-8 md:mt-0">
            <h1 className="my-6 text-xl sm:text-2xl md:my-10">Newsletter</h1>
            <p className="w-full text-sm text-gray-400 sm:text-base md:w-120">
              Weekly writings exploring creativity, design, and the hidden
              patterns shaping how we think and make.
            </p>
            <form className="mt-4 flex flex-col items-stretch gap-y-2 sm:flex-row sm:items-center sm:gap-x-2 sm:rounded-full sm:bg-[#3e3e3e] sm:p-1">
              <input
                type="text"
                placeholder="First name"
                className="flex-grow rounded-full bg-[#3e3e3e] px-4 py-2 text-white outline-none placeholder:text-gray-400 sm:bg-transparent sm:rounded-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-grow rounded-full bg-[#3e3e3e] px-4 py-2 text-white outline-none placeholder:text-gray-400 sm:rounded-none sm:border-l sm:border-gray-600 sm:bg-transparent"
              />
              <button
                type="submit"
                className="ml-0 mt-2 cursor-pointer rounded-full bg-red-500 px-8 py-2 font-bold text-white outline-none transition-all hover:bg-red-600 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 sm:ml-2 sm:mt-0"
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
