import React from "react";

const ReviewCard1 = ({ review1 }) => {
  const { img, name, title, review, shop } = review1;

  return (
    <div className="bg-white rounded-[22px] lg:rounded-[50px] w-[278px] lg:w-[619px] h-auto lg:h-[553px] px-[14px] lg:px-[30px] pt-[25px]  lg:pt-[55px] pb-[15px] lg:pb-[40px]">
      <section className="flex justify-between">
        <figure className="flex gap-2 lg:gap-5 items-center ">
          <img
            src={img}
            alt="Customer Images"
            className="w-[43px] lg:w-[95px]"
          />
          <figcaption>
            <h4 className="text-[13px] lg:text-[31px]  font-semibold leading-[14px ] lg:leading-[33.17px] tracking-[0.139px] lg:tracking-[0.31px]">
              {name}
            </h4>
            <p className="text-[#344054] text-[10.785px] lg:text-2xl leading-[16.717px] lg:leading-[37.2px]  font-medium  font-[inter]">
              {title}
            </p>
          </figcaption>
        </figure>
        <div>
          <p className="text-[#667085] text-[8.089px] md:text-[9px] lg:text-lg  leading-[12.538px] lg:leading-[27.9px] border-[1px]  border-[#E4E7EC] rounded-[18px] lg:rounded-[40px] py-[4.49px] px-[14px]">
            {shop}
          </p>
        </div>
      </section>
      <p className="text-[#344054] text-[10.785px] lg:text-2xl  font-medium leading-4 lg:leading-[37.2px] font-[inter] mt-[17px] lg:mt-[30px]">
        {review}
      </p>
    </div>
  );
};

export default ReviewCard1;
