import React from "react";
import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-5 ">
      <div className="bg-[#9538E2] text-white flex flex-col  justify-center items-center text-center rounded-b-4xl">
        <h1 className="font-bold text-lg md:text-[56px] px-1 md:px-15 text-center pt-12">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mt-6 mb-8 px-5 md:px-0 md:w-[796px] text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="rounded-4xl bg-white text-[#9538E2] mb-[180px] md:mb-[268px] font-bold text-xl px-[30px] py-[15px] ">
          Shop Now
        </button>
      </div>
      <div className="max-w-[1110px]  mx-5 md:mx-auto bg-white/30 backdrop-blur-2xl border-2 border-white p-6 md:-mt-52 -mt-32 rounded-4xl  md:h-[600px]">
        <img
          className="w-full h-full object-cover rounded-4xl"
          src={bannerImg}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
