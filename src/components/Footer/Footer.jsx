import React from "react";
import logo from "../../assets/review-img/Clip path group.svg";
const Footer = () => {
  return (
    <div className="mt-[150px] container mx-auto">
      <footer className="lg:flex px-5 md:pl-10 lg:px-[100px]">
        <aside className="lg:w-[40%] mb-10">
          <img src={logo} alt="" />
          <p className="text-[#667085] font-medium font-[inter] leading-[27.9px] mt-10">
            hello@quika.com
            <br />
            Phone: +234-813-371-4243
          </p>
        </aside>
        <div className="lg:w-[60%] grid grid-cols-2 lg:grid-cols-3">
          <nav>
            <h6 className="text-[#1D2939] text-xl font-semibold leading-[21.4px] tracking-[0.2px] mb-5">
              Services
            </h6>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Branding
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Design
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Marketing
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Advertisement
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Restaurants Salon
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Spa & Salon
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Clinics
            </a>
          </nav>

          <nav>
            <h6 className="text-[#1D2939] text-xl font-semibold leading-[21.4px] tracking-[0.2px] mb-5">
              Info
            </h6>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              price
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Contact
            </a>
            <h6 className="text-[#1D2939] text-xl font-semibold leading-[21.4px] tracking-[0.2px] mb-5 mt-7">
              About
            </h6>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              Leadership
            </a>
            <a className="link link-hover block text-[#667085] text-base font-medium leading-[27.9px] font-[inter] mb-1">
              people
            </a>
          </nav>

          <nav className="lg:border-l lg:pl-[60px] mt-5">
            <h6 className="text-[#1D2939] text-xl font-semibold leading-[21.4px] tracking-[0.2px] mb-5">
              Subscribe to our newsletter.
            </h6>
            <p className=" text-[#667085] text-lg lg:text-sm font-medium leading-[31px] font-[inter] mb-[30px]">
              Want to stay up to date with news and updates about our product?
              Subscribe.
            </p>
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full "
            />
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
