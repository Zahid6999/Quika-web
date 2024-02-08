import React, { useRef } from "react";
import img1 from "../../assets/scroll-Img/image 1.png";
import img2 from "../../assets/scroll-Img/image 2.png";
import img3 from "../../assets/scroll-Img/image 3.png";
import img4 from "../../assets/scroll-Img/image 4.png";
import img5 from "../../assets/scroll-Img/image 5.png";
import img6 from "../../assets/scroll-Img/image 6.png";
import img7 from "../../assets/scroll-Img/image 7.png";
import Card from "../Card/Card";
import plusSquare from "../../assets/scroll-Img/Group 18408.png";
import { motion, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Array Of Object_____________
const arrayOfObjects = [
  {
    img: img1,
    title: "Quika Storefronts",
    text: "Boost sales with an easy-to-use online interface to showcase your services to customers.",
    bgColor: "#FFF6E1",
  },
  {
    img: img2,
    title: "Be Prepared",
    text: "Know who's coming with simple, intuitive booking and reservations. Increase customer loyalty and make every visit a true delight.",
    bgColor: "#FFE7DD",
  },
  {
    img: img3,
    title: "Make your business easy to find",
    text: "Build and strengthen relationships with your customers using our CRM tools.",
    bgColor: "#DDE9FF",
  },
  {
    img: img4,
    title: "Simplify communication",
    text: "Integrate messaging and payments for seamless business operations.",
    bgColor: "#FEE9ED",
  },
  {
    img: img5,
    title: "Event Shoutouts",
    text: "Boost event attendance beyond expectation by showcasing and automatically notifying customers on all platforms.",
    bgColor: "#FEF4E9",
  },
  {
    img: img6,
    title: "Effortless Invoice",
    text: "Invoice Maker easily generates and sends invoices to any customer.",
    bgColor: "#D7DEF8",
  },
  {
    img: img7,
    title: "Boost sales with Social media connector",
    text: "Instantly promote your services with positive customer reviews on social media.",
    bgColor: "#E3DCFF",
  },
];

// ===============framer motion =================

const CardScroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Smooth Animation Basic Using_____________

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <div className="mt-[150px] " ref={container}>
      <article className="flex justify-center">
        <h1 className="text-[30px] lg:text-4xl 3xl:text-[56px] text-[#0D141E] relative inline font-semibold leading-[32.1px] 3xl:leading-[59.52px] tracking-[0.3px] 3xl:tracking-[0.56px] ">
          Quika Benefits for <br /> Every Business
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="223"
            height="24"
            viewBox="0 0 223 24"
            fill="none"
            className="absolute md:right-14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.4371 14.1335C49.8565 16.3024 38.7951 18.4608 28.1541 18.9997C19.0589 19.4597 10.2739 18.7452 3.08323 15.7053C2.0696 15.2773 0.800259 15.5716 0.252079 16.3637C-0.296936 17.1551 0.080769 18.1463 1.0944 18.575C8.93855 21.8902 18.5032 22.7574 28.424 22.255C39.2564 21.7069 50.5175 19.5341 60.2903 17.3339C61.4242 19.1276 63.7724 20.7999 67.9088 22.0337C74.2622 23.9292 82.9369 23.9057 92.0755 22.8376C105.33 21.2892 119.587 17.5969 128.754 14.9733C129.13 14.8662 129.69 14.696 130.375 14.4715C130.584 14.8317 130.818 15.1866 131.077 15.5351C133.325 18.5717 137.303 21.027 141.356 21.9039C167.06 27.4643 197.059 20.8019 221.485 15.3797C222.588 15.1338 223.232 14.2308 222.923 13.3649C222.605 12.4991 221.452 11.996 220.34 12.242C196.6 17.5127 167.453 24.1628 142.467 18.7596C139.392 18.0941 136.4 16.2071 134.696 13.9025C134.503 13.6455 134.336 13.3825 134.178 13.1157C137.545 11.8127 141.506 9.99615 143.637 8.05176C145.826 6.05844 146.37 3.9307 144.464 1.92106C142.826 0.203083 140.345 0.0569249 137.762 0.94756C134.98 1.90149 132.113 4.13163 131.186 5.17821C129.448 7.13304 128.896 9.25362 129.214 11.3213C128.395 11.5915 127.73 11.7924 127.319 11.9099C118.353 14.4754 104.417 18.0967 91.4571 19.6111C83.1183 20.5859 75.1973 20.7157 69.3996 18.9867C66.9269 18.2487 65.2932 17.3875 64.4066 16.3879C66.1564 15.9794 67.8436 15.5775 69.4556 15.1938C72.6436 14.435 79.281 13.179 84.0233 10.9403C87.7945 9.16033 90.3516 6.73897 90.2029 3.70364C90.1268 2.14421 88.9711 1.10348 87.1318 0.520167C84.3834 -0.350894 79.6303 0.0705989 77.8604 0.364215C72.4923 1.25289 65.3275 4.93159 61.7827 9.0768C60.368 10.7308 59.5265 12.4612 59.4371 14.1335ZM63.8467 13.1143C65.3634 12.7581 66.8292 12.4083 68.2372 12.073C71.2129 11.3644 77.4334 10.2388 81.8615 8.1483C84.2063 7.04169 86.1207 5.71587 86.028 3.82825C86.0205 3.68144 85.8341 3.63969 85.6695 3.57966C85.4146 3.48766 85.123 3.42436 84.8121 3.37477C82.7088 3.03939 79.8835 3.36366 78.727 3.55549C74.2229 4.30127 68.2313 7.41035 65.2573 10.8887C64.6289 11.6234 64.1284 12.3718 63.8467 13.1143ZM133.342 9.81932C135.306 9.03047 137.361 8.07653 138.982 7.03844C139.843 6.48709 140.57 5.92011 141.03 5.33157C141.414 4.84482 141.565 4.34629 141.105 3.86476C140.921 3.66967 140.645 3.66578 140.361 3.70232C140.06 3.74147 139.751 3.82497 139.442 3.93262C137.403 4.63339 135.297 6.27047 134.62 7.03844C133.827 7.92907 133.434 8.87127 133.342 9.81932Z"
              fill="#6180DD"
            />
          </svg>
        </h1>
      </article>

      <section className="mt-[60px] lg:mt-20 2xl:mt-20 ">
        {arrayOfObjects?.map((cardInfo, index) => (
          // {/* let targetScale = 1 -((arrayOfObjects.length - index) *0.05) */}
          <Card
            key={index}
            i={index}
            cardInfo={cardInfo}
            range={[index * 0.25, 1]}
            progress={scrollYProgress}
            // targetScale={targetScale}
          />
        ))}
      </section>

      <div className="xl:max-w-[1140px] mx-auto p-5 md:p-10">
        <img src={plusSquare} alt="" className="mx-auto" />
        <p className="bg-[#D1F4D9] text-[#1D2939] text-center text-2xl font-medium leading-[25.47px] tracking-[0.24px] xl:text-4xl xl:leading-[38.47px] xl:tracking-[0.36px] flex justify-center items-center px-5 xl:px-[116px] pt-20 pb-[62px] rounded-[60px]   -mt-16">
          Plus so many features to amplify your business, be more personable,
          grow your customer base, and achieve more success
        </p>
      </div>
    </div>
  );
};

export default CardScroll;
