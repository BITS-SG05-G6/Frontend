import React from "react";
import MemberCard from "../../components/AboutUs/MemberCard";

import imageThong from "../../assets/thanhthong.jpeg";
import imageHaAnh from "../../assets/haanh.jpeg";
import imageXian from "../../assets/xian.png";
import imageQuynhAnh from "../../assets/quynhanh.jpeg";
import imageTuanAnh from "../../assets/tuananh.jpeg";

import logoIcon from "../../assets/logoIcon.png";

export function AboutUs() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-20">
      {/* Meet Our Team Members */}
      <div className="mb-10 flex flex-col items-center justify-center rounded-xl bg-[#EF5DA8] px-4 py-8 md:px-8 md:py-12 lg:px-20 lg:py-20">
        {/* Logo */}
        <img
          src={logoIcon}
          alt=""
          className="mb-4 h-12 w-12 rounded-xl bg-white px-3 py-3 md:mb-8 md:h-16 md:w-16"
        />

        {/* Title */}
        <span className="mb-3 text-xl font-semibold text-white md:text-2xl lg:text-4xl">
          Meet Our Team Members
        </span>

        <p className="text-center text-sm font-medium text-white md:text-base lg:text-lg">
          Our team at Nutritionist is composed of highly skilled professionals
          who are passionate about helping you achieve your health and wellness
          goals. With a diverse range of expertise in nutrition, coaching, and
          support, our team is dedicated to providing you with the guidance and
          personalized care you need. Get to know the experts behind our success
          and discover how they can make a positive impact on your journey to
          better health.
        </p>
      </div>

      {/* Team Member Card */}
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-14 xl:grid-cols-5 xl:gap-6">
        <div className="flex w-full items-center justify-center">
          <MemberCard
            imgSrc={imageHaAnh}
            name={"Ha Anh"}
            role={"BE Developer, Tester & Technical Writer"}
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <MemberCard
            imgSrc={imageXian}
            name={"Hong Van"}
            role={"Project Leader, FE Developer & Technical Writer"}
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <MemberCard
            imgSrc={imageThong}
            name={"Thanh Thong"}
            role={"UI/UX Designer, FE & BE Developer"}
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <MemberCard
            imgSrc={imageTuanAnh}
            name={"Tuan Anh"}
            role={"BE Developer & Technical Writer"}
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <MemberCard
            imgSrc={imageQuynhAnh}
            name={"Quynh Anh"}
            role={"FE Developer"}
          />
        </div>
      </div>
    </div>
  );
}
