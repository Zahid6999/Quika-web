import React from "react";
import customer1 from "../../assets/review-img/customer1.png";
import customer2 from "../../assets/review-img/customer2.png";
import customer3 from "../../assets/review-img/customer3.png";
import customer4 from "../../assets/review-img/customer4.png";
import ReviewCard1 from "../ReviewCar/ReviewCard1";
import zahidImg from "../../assets/review-img/zahid-Photoroom.png";
import Marquee from "react-fast-marquee";
import ReviewCard2 from "../ReviewCar/ReviewCard2";

// public Review- 1---------------->
const publicReview1 = [
  {
    img: customer1,
    name: "Sarah",
    title: "The Hungry Bear",
    shop: "Restaurant & Bars",
    review:
      "\"Quika has completely transformed the way we manage reservations and live menus at our restaurant, The Hungry Bear. Not only has it saved us time and hassle, but it's also helped us increase our reservations and overall revenue. Plus, the social media connector and event hub have helped us connect with more customers and promote our business. We couldn't be happier with Quika! \"",
  },
  {
    img: customer2,
    name: "Maria",
    title: "The Glam Room",
    shop: "Salons & Spas",
    review:
      '"As a busy salon owner, I was constantly struggling to manage bookings and keep track of customer information. Quika has made everything sonmuch easier and more organized. Not only have we been able to reduce wait times by 90%, but we\'ve also seen an increase in repeat customers thanks to the CRM tools. Quika has been a game-changer for our business! "',
  },
  {
    img: customer3,
    name: "Dave",
    title: "The Hungry Bear",
    shop: "Salons & Spas",
    review:
      "\"Before using Quika, we struggled to manage bookings and promotions for our boutique hotel, The Seaside Retreat. Now, everything is streamlined and efficient thanks to Quika's Discovery and Reservations tools.Plus, the customer app has helped us keep our guests informed and engage throughout their stay. We're thrilled with the results",
  },
  {
    img: customer4,
    name: "Dr. Sagor ",
    title: "Family Health Clinic",
    shop: "Hospital",
    review:
      "\"Before using Quika, we struggled to manage bookings and promotions for our boutique hotel, The Seaside Retreat. Now, everything is streamlined and efficient thanks to Quika's Discovery and Reservations tools.Plus, the customer app has helped us keep our guests informed and engage throughout their stay. We're thrilled with the results",
  },
];
// public Review- 2---------------->
const publicReview2 = [
  {
    img: zahidImg,
    name: "Zahid",
    title: "Web developer",
    shop: "static mania ",
    review:
      "\"As a healthcare professional, I know firsthand how important it is to provide excellent care and customer service. Quika has helped us do just that by allowing us to manage appointments and gather valuable feedback through Care Experience Reviews. It's made a huge difference in the way we serve our patients and we couldn't be happier with the results.\"",
  },
  {
    img: customer1,
    name: "Dr Jessica",
    title: "Auto Mechanic",
    shop: "Salons & Spas",
    review:
      '"As a busy salon owner, I was constantly struggling to manage bookings and keep track of customer information. Quika has made everything sonmuch easier and more organized. Not only have we been able to reduce wait times by 90%, but we\'ve also seen an increase in repeat customers thanks to the CRM tools. Quika has been a game-changer for our business! "',
  },
  {
    img: customer2,
    name: "Dave",
    title: "The Hungry Bear",
    shop: "Salons & Spas",
    review:
      "\"Before using Quika, we struggled to manage bookings and promotions for our boutique hotel, The Seaside Retreat. Now, everything is streamlined and efficient thanks to Quika's Discovery and Reservations tools.Plus, the customer app has helped us keep our guests informed and engage throughout their stay. We're thrilled with the results",
  },
  {
    img: customer3,
    name: "Rohan ",
    title: "Dollar Seller",
    shop: "Admiki",
    review:
      "\"Before using Quika, we struggled to manage bookings and promotions for our boutique hotel, The Seaside Retreat. Now, everything is streamlined and efficient thanks to Quika's Discovery and Reservations tools.Plus, the customer app has helped us keep our guests informed and engage throughout their stay. We're thrilled with the results",
  },
];

const ReviewPublic = () => {
  return (
    <div className="mt-[150px] bg-[#E2F5D9] rounded-t-[40px] lg:rounded-t-[80px] py-[100px]">
      <h1 className="text-[30px] lg:text-[66px] text-[#0D141E] text-center font-semibold leading-8 lg:leading-[72.66px] tracking-[0.3px] lg:tracking-[0.66px] ">
        The people thinks <br /> about us!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="51"
          viewBox="0 0 71 51"
          fill="none"
          className="inline w-[37px] lg:w-fit"
        >
          <path
            d="M13.3369 33.3592C12.723 33.1906 12.2492 33.0702 11.7833 32.9318C4.70465 30.8207 -0.171088 24.0802 0.00459778 16.6413C0.201997 8.84727 5.32251 2.28935 12.6065 0.501376C22.6738 -1.97289 31.3376 5.04055 32.9168 14.2834C33.7498 19.1698 33.0273 23.9999 31.6712 28.6976C28.4122 39.9733 20.9288 47.0249 10.1035 50.659C8.7217 51.1226 7.43071 51.1206 6.28186 50.1212C4.76781 48.8048 4.70267 46.6737 5.96405 44.9981C7.66759 42.7325 9.35732 40.4469 10.899 38.069C11.8465 36.6221 12.5098 34.9866 13.3369 33.3592Z"
            fill="#5CAD36"
          />
          <path
            d="M51.1272 33.4455C49.8461 33.006 48.7999 32.7131 47.805 32.2957C41.3106 29.5685 37.108 22.539 37.791 15.5918C38.549 7.86399 43.8373 1.78968 51.0029 0.346862C60.9517 -1.65984 68.9187 5.32751 70.6203 13.9002C71.2954 17.2995 70.9638 20.6989 70.4505 24.0742C69.5484 30.002 67.4244 35.4181 63.6423 40.0857C59.2837 45.4637 53.6816 48.8951 47.1674 50.8657C45.7264 51.3012 44.2064 50.647 43.3695 49.3446C42.5325 48.0423 42.6233 46.469 43.5767 45.2028C44.9822 43.3305 46.4903 41.5265 47.7557 39.5619C49.021 37.5974 49.9961 35.5184 51.1272 33.4455Z"
            fill="#5CAD36"
          />
        </svg>
      </h1>

      <Marquee gradient={true} speed={70}>
        <section className=" grid grid-cols-4  gap-3 lg:gap-5 px-2 lg:px-[10px] mt-[60px]">
          {publicReview1?.map((review1, i) => (
            <ReviewCard1 key={i} review1={review1}></ReviewCard1>
          ))}
        </section>
      </Marquee>

      {/*==================================================== */}
      <Marquee direction="right" speed={70}>
        <section className=" grid grid-cols-4  gap-3 lg:gap-5 px-2 lg:px-[10px] mt-5">
          {publicReview2?.map((review2, i) => (
            <ReviewCard2 key={i} review2={review2}></ReviewCard2>
          ))}
        </section>
      </Marquee>
    </div>
  );
};

export default ReviewPublic;
