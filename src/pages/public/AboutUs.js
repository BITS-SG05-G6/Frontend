import React from "react";
import MemberCard from "../../components/AboutUs/MemberCard";

import imageThong from "../../assets/thanhthong.jpeg";
import imageHaAnh from "../../assets/haanh.jpeg";
import imageXian from "../../assets/xian.png";
import imageQuynhAnh from "../../assets/quynhanh.jpeg";
import imageTuanAnh from "../../assets/tuananh.jpeg";

export function AboutUs() {
  return (
    <div className="mx-20">
      {/* Meet Our Team Members */}
      <div className="bg-[#EF5DA8] rounded-xl px-20 py-20 flex flex-col items-center justify-center mb-10">
        {/* Logo */}
        <img
          src="https://picsum.photos/200"
          alt=""
          className="w-16 h-16 rounded-xl mb-16"
        />

        {/* Title */}
        <span className="mb-3 font-semibold text-4xl text-white">
          Meet Our Team Members
        </span>

        <p className="text-base font-medium text-white">
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
      <div className="grid grid-cols-5 gap-5">
        <MemberCard
          imgSrc={imageHaAnh}
          name={"Ha Anh"}
          role={"BE Developer, Tester & Technical Writer"}
        />
        <MemberCard
          imgSrc={imageXian}
          name={"Hong Van"}
          role={"Project Leader, FE Developer & Technical Writer"}
        />
        <MemberCard
          imgSrc={imageThong}
          name={"Thanh Thong"}
          role={"UI/UX Designer, FE & BE Developer"}
        />
        <MemberCard
          imgSrc={imageTuanAnh}
          name={"Tuan Anh"}
          role={"BE Developer & Technical Writer"}
        />
        <MemberCard
          imgSrc={imageQuynhAnh}
          name={"Quyanh Anh"}
          role={"FE Developer"}
        />
      </div>
    </div>
  );
}
