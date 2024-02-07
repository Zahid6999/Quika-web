import React from "react";
import introduceImg from "../../assets/Group 18396.png";

const IntroduceHero = () => {
  return (
    <div className="bg-[#F1F5FF] grid grid-cols-1 lg:grid-cols-2  lg:gap-[40px] mt-[150px]">
      <figure className="bg-[#FEBD2B] m-[30px] rounded-[30px] pt-[120px] pb-[105px] pl-5 md:pl-20 3xl:pl-[112px] pr-5 md:pr-14 3xl:pr-16">
        <img src={introduceImg} alt="Introduce Hero Image" className="" />
      </figure>
      <section className="lg:mt-[225px] pb-8 p-[30px]">
        <h1 className="text-[30px] lg:text-[56px] font-semibold leading-8 lg:[59.92px] tracking-[0.3px] lg:tracking-[0.56px]">
          Introducing{" "}
          <span className=" text-[#6180DD] after:content-quikaShape">
            Quika
          </span>
        </h1>
        <p className="text-2xl text-[#344054] font-medium leading-[37.2px] font-[inter] mt-[30px]  mb-[60px] ">
          Quika! is a powerful platform that helps businesses of all sizes grow
          and thrive by providing all the digital tools you need to keep your
          customers smiling and your business growing. From booking assistance
          and customer relationship management to social media and experience
          gifting, Quika has everything you need to supercharge your business.
          Start using Quika today and see the difference it can make for your
          business!
        </p>

        <button className="flex gap-2 items-center text-lg text-[#0D141E] font-semibold leading-[18px] tracking-[0.18px] border-[1px] border-[#344054] py-[18px] px-[30px] rounded-[60px] ">
          See more
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
      </section>
    </div>
  );
};

export default IntroduceHero;
