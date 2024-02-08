import React from "react";
import recomandedBtn from "../../assets/scroll-Img/Group 24.png";

const MonthlyCard = ({ obj }) => {
  // Destructure Obj Params-------------------->
  const {
    title,
    dollar,
    select,
    selectBg,
    btnBg,
    bgColor,
    horizontalBG,
    icon,
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
  } = obj;
  console.log(obj);
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="p-5 min-h-[670px] rounded-[40px] relative"
    >
      <div className="flex justify-between items-center pt-[60px]">
        <h2 className="text-[#0D141E] text-[32px]  lg:text-[46px] font-semibold leading-[34.24px] lg:leading-[49.22px] tracking-[0.32px] lg:tracking-[0.46px]  pb-[18px] px-[10px]">
          {title}
        </h2>

        {select && <img src={recomandedBtn} alt="" className="-mr-[27px]" />}
      </div>
      <h3
        className="text-2xl lg:text-4xl font-medium leading-[25.68px] lg:leading-[38.52px] tracking-[0.24px] lg:tracking-[0.36px] border-b  px-[10px] pb-[30px] "
        style={{ borderColor: horizontalBG }}
      >
        {dollar}
      </h3>

      <div className="px-[10px] mt-[30px]">
        <p className="flex gap-3 items-center text-base md:text-xl font-medium font-[inter] leading-[23.2px] md:leading-[29px] pb-4">
          <span>{icon}</span> {line1}
        </p>
        <p className="flex gap-3 items-center text-base md:text-xl font-medium font-[inter] leading-[23.2px] md:leading-[29px] pb-4">
          <span>{icon}</span> {line2}
        </p>
        <p className="flex gap-3 items-center text-base md:text-xl font-medium font-[inter] leading-[23.2px] md:leading-[29px] pb-4">
          <span>{icon}</span> {line3}
        </p>
        {line4 && (
          <p className="flex gap-3 items-center text-base md:text-xl font-medium font-[inter] leading-[23.2px] md:leading-[29px] pb-4">
            <span>{icon}</span> {line4}
          </p>
        )}
        {line5 && (
          <p className="flex gap-3 items-center text-base md:text-xl font-medium font-[inter] leading-[23.2px] md:leading-[29px] pb-4">
            <span>{icon}</span> {line5}
          </p>
        )}
        {line5 && (
          <p className="flex gap-3 items-center text-base md:text-xl font-medium font-[inter] leading-[23.2px] md:leading-[29px] pb-4">
            <span>{icon}</span> {line6}
          </p>
        )}
      </div>

      <div className="flex gap-[30px] items-center absolute bottom-8 ml-[10px]">
        <button className="text-base md:text-lg  font-semibold leading-4 md:leading-[18px] tracking-[0.16px] md:tracking-[0.18px] flex items-center gap-[5px] border-[1px] border-[#344054] py-[18px] px-6 rounded-[40px]">
          Request a demo
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12L19 12M19 12L12 5M19 12L12 19"
                stroke="#344054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <a
          href="#"
          className="text-base md:text-lg font-semibold text-[#344054] leading-4 md:leading-[18px] tracking-[0.16px] md:tracking-[0.18px]  underline hover:text-lime-400 duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default MonthlyCard;
