import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoLogoGithub, IoMdSunny, IoMdMenu, IoMdClose } from "react-icons/io";

import { useState } from "react";

export const Nabvar = () => {
  const router = useRouter();
  const [showNavResp, setShowNavResp] = useState(false);

  const handleShowNavResp = () => {
    setShowNavResp(!showNavResp);
  };

  const isActive = () => {
    if (router.pathname === "/works") {
      return "bg-purple-500 focus:ring-4";
    }
  };

  return (
    <nav className="w-full py-1 backdrop-filter backdrop-blur-md fixed z-20 inset-x-0 top-0">
      <div className="flex w-full px-3 sm:px-0 sm:w-2/3 p-1 mx-auto justify-between items-center">
        <div className="flex space-x-6 items-center">
          <Link href="/">
            <a className="flex flex-row">
              <figure className="transform hover:-rotate-45 transition duration-200">
                <Image
                  src="/images/footprint-dark.png"
                  alt="footprint"
                  width={20}
                  height={20}
                />
              </figure>
              <p className="font-bold capitalize ml-1">Jose Ortiz</p>
            </a>
          </Link>
          <div className="space-x-2 sm:flex items-center hidden">
            <Link href="/works">
              <a
                className={`${isActive()} p-2 hover:underline ring-purple-300 ring-opacity-80 transition duration-200`}
              >
                Works
              </a>
            </Link>
            <a
              className="flex items-center link-b hover:underline"
              href="https://github.com/Jortizuwu/Rock-Paper-Scissors"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
              <span className="ml-1">Source</span>
            </a>
          </div>
        </div>
        <div className="">
          <button className="bg-yellow-500 p-2 rounded-lg">
            <IoMdSunny />
          </button>
          <button
            className="sm:hidden bg-transparent p-2 rounded-lg ml-2 border border-white transition duration-200"
            onClick={handleShowNavResp}
          >
            {!showNavResp ? <IoMdMenu /> : <IoMdClose />}
          </button>
        </div>
      </div>

      <div
        className={`${
          showNavResp ? "" : "hidden"
        } space-x-2 flex flex-col items-center px-3 sm:hidden`}
      >
        <Link href="/works">
          <a
            className={`${isActive()} w-full text-center p-2 hover:underline ring-purple-300 ring-opacity-80 transition duration-200`}
          >
            Works
          </a>
        </Link>
        <a
          className="flex items-center link-b hover:underline py-3"
          href="https://github.com/Jortizuwu/Rock-Paper-Scissors"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub />
          <span className="ml-1">Source</span>
        </a>
      </div>
    </nav>
  );
};
