import React from "react";

const ServiceCard = ({ serviceCard }) => {
  const { title, img, color, icon, line1, line2, line3, line4, line5, text } =
    serviceCard;

  // Handle Btn ---------
  const handleBtn = () => {
    console.log("click");
  };
  return (
    <div
      style={{ backgroundColor: color }}
      className=" px-[10px] pt-[10px] pb-5 rounded-[30px] "
    >
      <figure className="">
        <img
          src={img}
          alt="Services Card"
          className="rounded-[26px]  w-full h-auto"
        />
      </figure>
      <figcaption className="text-[20px] md:text-2xl text-[#0D141E] font-medium leading-[21.4px] md:leading-[25.68px] tracking-[0.2px] md:tracking-[0.24px] mt-6 mb-4 px-6">
        {title}
      </figcaption>
      <ul className="px-5">
        {text && (
          <p className="text-[#344054] text-[13px] md:text-[15px]  font-medium leading-[18.85px] md:leading-[21.75px] font-[inter] text-center">
            {text}
          </p>
        )}
        <li className="flex gap-[11px] items-center text-[#344054] text-[13px] md:text-[15px]  font-medium leading-[18.85px] md:leading-[21.75px] font-[inter] mb-2 md:mb-[10px]">
          {icon} {line1}
        </li>
        <li className="flex gap-[11px] items-center text-[#344054] text-[13px] md:text-[15px]  font-medium leading-[18.85px] md:leading-[21.75px] font-[inter] mb-2 md:mb-[10px]">
          {icon} {line2}
        </li>
        <li className="flex gap-[11px] items-center text-[#344054] text-[13px] md:text-[15px]  font-medium leading-[18.85px] md:leading-[21.75px] font-[inter] mb-2 md:mb-[10px]">
          {icon} {line3}
        </li>
        <li className="flex gap-[11px] items-center text-[#344054] text-[13px] md:text-[15px]  font-medium leading-[18.85px] md:leading-[21.75px] font-[inter] mb-2 md:mb-[10px]">
          {icon} {line4}
        </li>
        {line5 && (
          <li className="flex gap-[11px] items-center text-[#344054] text-[13px] md:text-[15px]  font-medium leading-[18.85px] md:leading-[21.75px] font-[inter] mb-2 md:mb-[10px]">
            {icon} {line5}
          </li>
        )}
      </ul>

      {text ? (
        <button
          onClick={handleBtn}
          className="text-2xl font-semibold leading-6 tracking-[0.24px] bg-white border border-white rounded-[60px] py-4 px-[54px] flex items-center mx-auto gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <path
              d="M18.5 12.3333V24.6666M12.3333 18.4999H24.6667M33.9167 18.4999C33.9167 27.0143 27.0144 33.9166 18.5 33.9166C9.98562 33.9166 3.08334 27.0143 3.08334 18.4999C3.08334 9.98553 9.98562 3.08325 18.5 3.08325C27.0144 3.08325 33.9167 9.98553 33.9167 18.4999Z"
              stroke="#1D2939"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          More Info
        </button>
      ) : (
        <button className="flex gap-2 items-center text-base text-[#0D141E] font-semibold leading-4 tracking-[0.16px] border-[1px] border-[#0D141E] py-3 px-5 rounded-[60px] ml-5 mt-5">
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M3.75 9L14.25 9M14.25 9L9 3.75M14.25 9L9 14.25"
              stroke="#0D141E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
