import React from "react";
import logo from "../../assets/logo.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import hero from "../../assets/hero.png";

// NavList
const navList = (
  <>
    <li className="text-white text-lg font-semibold leading-[19.26px] tracking-[0.18px] ">
      <details>
        <summary>Services</summary>
        <ul className="p-2 bg-purple-400">
          <li className="text-white text-sm font-semibold leading-[19.26px] tracking-[0.18px]">
            <a>Services-1</a>
          </li>
          <li className="text-white text-sm font-semibold leading-[19.26px] tracking-[0.18px]">
            <a>Services-2</a>
          </li>
        </ul>
      </details>
    </li>
    <li className="text-white text-lg font-semibold leading-[19.26px] tracking-[0.18px]">
      <a>Individual</a>
    </li>
    <li className="text-white text-lg font-semibold leading-[19.26px] tracking-[0.18px]">
      <a>Pricing</a>
    </li>
    <li className="text-white text-lg font-semibold leading-[19.26px] tracking-[0.18px]">
      <a>About</a>
    </li>
    <li className="text-white text-lg font-semibold leading-[19.26px] tracking-[0.18px]">
      <a>Contact</a>
    </li>
  </>
);

const Navbar = () => {
  return (
    <section className="bg-[#7B98EF]">
      <div className="navbar 2xl:px-[105px]">
        <div className="navbar-start ">
          <img src={logo} alt="Logo" />
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="13"
                viewBox="0 0 40 13"
                fill="none"
              >
                <line
                  y1="1.5"
                  x2="40"
                  y2="1.5"
                  stroke="white"
                  strokeWidth="3"
                />
                <line
                  y1="11.5"
                  x2="40"
                  y2="11.5"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-horizontal dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <button className="text-white text-lg font-semibold leading-[18px] tracking-[0.18px] border-2 border-white bg-[#ffffff1a] py-3 px-5 rounded-[60px] hidden lg:block">
            Log in
          </button>
          <button className="text-[#31406F] text-lg font-semibold leading-[18px] tracking-[0.18px] border-2 border-white bg-white py-3 px-5 rounded-[60px] hidden lg:block">
            Sign in
          </button>
        </div>
      </div>

      {/*-------- Hero Start Hear---------------- */}

      <section className="lg:flex px-6 lg:gap-9 md:px-10 lg:px-24  2xl:pl-[154px] ">
        <div className=" ">
          <h1 className="text-[40px] text-center lg:text-left mt-10  md:text-[35px] lg:text-4xl xl:text-5xl 3xl:text-[76px] text-white font-semibold xl:leading-[42.8px] 3xl:leading-[81.32px] tracking-[0.4px] xl:tracking-[0.76px] max-w-[630px] md:mt-14 2xl:mt-28 3xl:mt-[140px]">
            <span className="xl:after:content-link">Ready To</span>
            <br /> Supercharge <br /> Your Business?
          </h1>
          <p className="xl:text-[22px] font-[inter] text-white text-center lg:text-left leading-[30.9px] xl:max-w-[510px] mt-5 mb-5 xl:pb-6 2xl:pb-[50px]">
            Sign up for Quika today and get access to all the tools you need to
            keep your customers smiling and your business growing.
          </p>
          <button className="flex mx-auto lg:mx-0 gap-[6px] items-center text-[#31406F] text-lg font-semibold leading-[18px] tracking-[0.18px] border-2 border-white bg-white py-5 px-[30px] rounded-[60px] mb-5">
            StartForFree
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="">
          <img src={hero} alt="Hero Images" className="" />
        </div>
      </section>
    </section>
  );
};

export default Navbar;
