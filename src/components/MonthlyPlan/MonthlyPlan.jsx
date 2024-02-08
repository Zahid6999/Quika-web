import React from "react";
import MonthlyCard from "./MonthlyCard";

// Array Of Object_____________
const arrayOfObjects = [
  {
    title: "Basic",
    dollar: "$9.99/mo",
    bgColor: "#E6EBFA",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M6.29289 2.12132C6.68342 1.7308 7.31658 1.7308 7.70711 2.12132L11.8787 6.29289C12.2692 6.68342 12.2692 7.31658 11.8787 7.70711L7.70711 11.8787C7.31658 12.2692 6.68342 12.2692 6.29289 11.8787L2.12132 7.70711C1.7308 7.31658 1.7308 6.68342 2.12132 6.29289L6.29289 2.12132Z"
          stroke="#344054"
          strokeWidth="2"
        />
      </svg>
    ),
    line1: "Booking assistant",
    line2: "Order manager",
    line3: "Invoice maker",
    horizontalBG: "#AFBEEA",
  },
  {
    title: "Pro",
    dollar: "$19.99/mo",
    select: "Recommended",
    selectBG: "#FFD880",
    bgColor: "#FFF4DA",
    btnBg: "#FEB000",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M6.29289 2.12132C6.68342 1.7308 7.31658 1.7308 7.70711 2.12132L11.8787 6.29289C12.2692 6.68342 12.2692 7.31658 11.8787 7.70711L7.70711 11.8787C7.31658 12.2692 6.68342 12.2692 6.29289 11.8787L2.12132 7.70711C1.7308 7.31658 1.7308 6.68342 2.12132 6.29289L6.29289 2.12132Z"
          stroke="#344054"
          strokeWidth="2"
        />
      </svg>
    ),
    line1: "All basic features",
    line2: "Storefronts",
    line3: "Customer app",
    line4: "Social media connector",
    line5: "Customer relationship manager",
    line6: "Reviews and ratings",
    horizontalBG: "#E9D5A8",
  },
  {
    title: "Enterprise",
    dollar: "$29.99/mo",
    bgColor: "#FFE0DE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M6.29289 2.12132C6.68342 1.7308 7.31658 1.7308 7.70711 2.12132L11.8787 6.29289C12.2692 6.68342 12.2692 7.31658 11.8787 7.70711L7.70711 11.8787C7.31658 12.2692 6.68342 12.2692 6.29289 11.8787L2.12132 7.70711C1.7308 7.31658 1.7308 6.68342 2.12132 6.29289L6.29289 2.12132Z"
          stroke="#344054"
          strokeWidth="2"
        />
      </svg>
    ),
    line1: "All pro features",
    line2: "Logistics connector",
    line3: "Summons, discovery, and promotions",
    line4: "Prepaid e-gift cards",
    line5: "Experience gifting",
    line6: "Advanced customer relationship manager",
    horizontalBG: "#E7A6A3",
  },
];

const MonthlyPlan = () => {
  return (
    <div className="mt-[123px]">
      <h3 className="text-[30px] xl:text-[66px]  font-semibold leading-[32.1px] tracking-[0.3px] xl:leading-[70.62px] xl:tracking-[0.66px] flex justify-center relative ">
        Choose your
        <span className="text-[#6180DD] "> plan</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="194"
          height="99"
          viewBox="0 0 194 99"
          fill="none"
          className="absolute hidden xl:block xl:left-12 3xl:left-[1050px] -top-4  "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M144.345 12.3957C153.556 13.4942 160.64 17.1235 167.693 21.1213C190.821 34.2468 197.399 52.0904 179.449 67.5243C151.542 91.4526 90.3057 103.416 44.642 91.5347C34.5284 88.9119 20.7654 86.183 11.312 76.8106C2.51778 68.0958 3.72051 58.7385 8.81072 50.4177C13.9988 41.8836 23.2311 34.4127 30.4745 29.723C62.1388 9.26701 123.386 -6.53117 176.202 9.11956C177.289 9.42708 178.426 9.15687 178.799 8.52102C179.171 7.88517 178.679 7.12663 177.671 6.8259C123.305 -9.28209 60.1237 6.80214 27.5332 27.854C18.5199 33.7034 6.52321 43.7302 2.38805 54.8166C-0.411452 62.3962 0.405523 70.4607 8.02226 78.0703C18.0596 88.0511 32.6706 91.0938 43.4061 93.884C90.5475 106.154 153.879 93.8668 182.649 69.1492C201.971 52.563 195.032 33.378 170.159 19.2687C162.578 14.9373 154.797 11.0883 144.799 9.89667C143.696 9.76575 142.703 10.2196 142.644 10.9149C142.505 11.6035 143.322 12.2716 144.345 12.3957Z"
            fill="#B0C0EE"
          />
        </svg>
      </h3>
      <p className="text-base xl:text-2xl font-medium leading-[24.8px] xl:leading-[37.2px]  font-[inter] text-center md:max-w-[848px] md:mx-auto mt-[13px]">
        ​This is your Price List section introductory paragraph. It’s an ideal
        place to introduce the types of paid services or plans available, and
        underline any important or unique features for your visitors.
      </p>

      <section className="mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  m-5">
        {arrayOfObjects?.map((obj, i) => (
          <MonthlyCard key={i} obj={obj} />
        ))}
      </section>
    </div>
  );
};

export default MonthlyPlan;
