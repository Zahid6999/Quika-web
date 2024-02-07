import React from "react";
import img1 from "../../assets/services/image 1.png";
import img2 from "../../assets/services/image 2.png";
import img3 from "../../assets/services/image 3.png";
import img4 from "../../assets/services/image 4.png";
import img5 from "../../assets/services/image 5.png";
import img6 from "../../assets/services/image 6.png";
import img7 from "../../assets/services/image 7.png";
import ServiceCard from "../ServiceCard/ServiceCard";
// Services static Array Data-----------
let arrayOfObjects = [
  {
    id: 1,
    color: "#FFE9E9",
    title: "Restaurants & Bars",
    img: img1,
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

    line1: "Increased reservations and table turnover",
    line2: "Streamlined menu management and updates",
    line3: "Improved customer experience with live menu and gift options",
    line4: "Enhanced social media presence and engagement",
    line5: "Event management and promotion",
  },
  {
    id: 2,
    color: "#D6EEFF",
    title: "Salons and Spas",
    img: img2,
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

    line1: "Improved booking and appointment management",
    line2: "Enhanced customer relationship management (CRM)",
    line3: "Increased efficiency and reduced wait times",
    line4: "Improved online presence and visibility",
    line5: "Customer review and rating management",
  },
  {
    id: 3,
    color: "#DEFFF8",
    title: "Boutique Hotels",
    img: img3,
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

    line1: "Enhanced discovery and reservations management",
    line2: "Improved online presence and visibility",
    line3: "Streamlined check-in and check-out processes",
    line4: "Enhanced customer experience with prepaid e-gift cards",
    line5: "Improved review and rating management",
  },
  {
    id: 4,
    color: "#D1E5F0",
    title: "Hospitals and Clinics",
    img: img4,
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

    line1: "Improved appointment management and patient flow",
    line2: "Enhanced customer experience and care management",
    line3: "Streamlined insurance and billing processes",
    line4: "Improved review and rating management",
  },
  {
    id: 5,
    color: "#FFEEEE",
    title: "Transportation and Mobility",
    img: img5,
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

    line1: "Improved booking and reservation management",
    line2: "Enhanced customer experience with e-ticketing options",
    line3: "Improved online presence and visibility",
    line4: "Streamlined scheduling and dispatch processes",
  },
  {
    id: 6,
    color: "#E4FDF2",
    title: "Auto Service",
    img: img6,
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

    line1: "Improved booking and reservation management",
    line2: "Enhanced customer experience with instant help options",
    line3: "Improved online presence and visibility",
    line4: "Streamlined scheduling and dispatch processes",
  },
  {
    id: 7,
    color: "#D1C9F9",
    title: "Support",
    img: img7,

    text: "At Quika, we are dedicated to providing the best support experience possible. We understand that running a business can be stressful, and we want to ensure that using our platform is as smooth and hassle-free as possible.",
  },
];

// console.log(arrayOfObjects[0].list[1]);

const Business = () => {
  return (
    <div>
      <h1 className="text-[30px] lg:text-4xl 3xl:text-[56px] text-[#0D141E] text-center  font-semibold leading-[32.1px] 3xl:leading-[59.52px] tracking-[0.3px] 3xl:tracking-[0.56px] mt-[45px]">
        Target Business <br /> Segments
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="329"
          height="21"
          viewBox="0 0 329 21"
          fill="none"
          className="mx-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M109.056 1.78037C72.7807 1.36274 36.3569 2.88901 1.24487 9.29787C0.618413 9.41177 0.358349 9.63578 0.307094 9.68704C0.00715292 9.99078 -0.0251748 10.3135 0.0127924 10.5793C0.0355727 10.7406 0.189407 11.4221 1.03038 11.4924C1.61128 11.5398 5.73445 11.2076 7.32527 11.1222C14.8143 10.7216 22.2882 10.1502 29.7582 9.4896C46.6954 7.99749 63.6097 6.70661 80.5734 5.53153C90.0975 4.8709 99.6254 4.32416 109.148 3.87615C132.055 4.14381 154.906 5.18793 177.329 6.26619C168.416 6.81482 160.227 7.37103 153.436 7.73172C141.985 8.3392 130.555 9.05677 119.127 10.0021C113.256 10.4862 107.392 11.0121 101.531 11.6329C100.882 11.7031 99.4032 11.7752 98.6876 11.8606C98.3838 11.8948 98.1636 11.9499 98.0649 11.9878C97.4461 12.227 97.3682 12.7168 97.3606 12.9636C97.3568 13.1136 97.4081 13.9318 98.4522 14.0912C146.999 21.5745 197.647 12.8687 246.368 20.1432C246.94 20.2286 247.475 19.8337 247.561 19.2604C247.646 18.689 247.251 18.1537 246.678 18.0683C200.791 11.2171 153.193 18.5429 107.247 13.1648C111.262 12.7757 115.279 12.4245 119.3 12.0922C130.707 11.1488 142.116 10.4331 153.548 9.82561C165.052 9.21624 180.604 8.02596 196.882 7.27611C210.852 8.05444 224.814 8.92768 238.786 9.66804C244.681 9.97937 250.577 10.2376 256.47 10.5546C258.892 10.6837 265.124 11.2247 266.028 11.0235C266.73 10.8659 266.899 10.3629 266.941 10.1104C266.985 9.83701 266.958 9.49719 266.639 9.17257C266.54 9.07006 266.244 8.85745 265.637 8.6828C249.207 3.97677 222.303 4.0508 197.106 5.18792C191.686 4.88418 186.266 4.59563 180.845 4.33556C168.433 3.73757 155.885 3.13768 143.265 2.66499C178.831 1.78605 214.413 2.03854 250.006 2.67449C264.95 2.94216 305.231 4.55577 321.095 5.98144C320.902 6.18077 320.788 6.45792 320.801 6.75976C320.828 7.33686 321.319 7.78488 321.898 7.7583C325.171 7.60643 327.064 7.4128 327.814 7.21347C328.281 7.09008 328.535 6.89265 328.653 6.76356C328.941 6.45223 328.994 6.11811 328.938 5.80108C328.901 5.60365 328.812 5.38724 328.607 5.18792C328.471 5.05124 328.136 4.84243 327.567 4.70005C321.331 3.14909 267.837 0.895722 250.044 0.576798C203.023 -0.262276 156.022 -0.433111 109.056 1.78037ZM252.918 8.26895C243.73 7.02173 232.958 6.58321 221.722 6.61169C227.446 6.9439 233.171 7.26853 238.898 7.57227C243.57 7.82095 248.244 8.03355 252.918 8.26895ZM65.7207 4.48933C53.6662 5.37777 41.6248 6.33833 29.5741 7.40141C28.1826 7.5229 26.793 7.6425 25.4015 7.7602C38.7279 6.12761 52.193 5.08922 65.7207 4.48933Z"
            fill="#6180DD"
          />
        </svg>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-4 justify-center gap-5 mx-[22px] mt-10">
        {arrayOfObjects?.map((serviceCard) => (
          <ServiceCard
            key={serviceCard.id}
            serviceCard={serviceCard}
          ></ServiceCard>
        ))}
      </section>
    </div>
  );
};

export default Business;
