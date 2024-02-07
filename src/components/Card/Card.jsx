import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ cardInfo, i, range, progress }) => {
  const { img, title, text, bgColor } = cardInfo;
  // _________________ScrollProgress__________________
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // const imageScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(progress, range, [1, 0.9]);

  return (
    <motion.div
      ref={container}
      style={{ scale, backgroundColor: bgColor, top: `calc(${i * 25}px)` }}
      className="max-w-[1568px] min-h-[646px] my-[40px] 3xl:my-[60px] mx-5 2xl:mx-auto rounded-[40px] xl:rounded-[40px] md:flex items-center gap-10 2xl:gap-[144px] mb-[30px] md:mb-0 sticky top-20"
    >
      <motion.figure className="m-5" style={{ opacity: scrollYProgress }}>
        <img
          src={img}
          alt="Scrolling Image"
          className="w-full 2xl:w-[650px] 2xl:h-[605px] h-auto rounded-[50px] py-5 lg:py-0"
        />
      </motion.figure>

      <div className="pb-5 pr-5">
        <h2 className="text-[26px] lg:text-[40px] font-semibold leading-[27.28px] tracking-[0.26px] lg:leading-[42.8px] lg:tracking-[0.4px] text-[#0D141E] mb-4 mt-4 text-center md:text-left lg:mb-[30px] px-4 lg:px-0">
          {title}
        </h2>
        <p className="px-6 md:px-0 text- xl:text-2xl  font-medium leading-[27.9px] md:leading-[37.2px] font-[inter] text-center md:text-left pb-[30px]">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
