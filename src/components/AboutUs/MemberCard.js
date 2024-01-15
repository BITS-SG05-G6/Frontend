import React from "react";

function MemberCard({ imgSrc, name, role }) {
  return (
    <div className="relative flex flex-col rounded-lg">
      {/* Background */}
      <img
        src={imgSrc}
        alt=""
        className="h-[350px] w-[300px] rounded-xl object-cover"
      />

      {/* Name & Role */}
      <div className="absolute bottom-[-50px] left-0 flex w-4/5 flex-col rounded-2xl border-2 border-solid bg-white px-5 py-5">
        <span className="text-left text-xl font-semibold">{name}</span>
        <span className="text-left text-base font-medium">{role}</span>
      </div>
    </div>
  );
}

export default MemberCard;
