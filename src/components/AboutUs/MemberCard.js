import React from "react";

function MemberCard({ imgSrc, name, role }) {
  return (
    <div className="flex flex-col rounded-lg relative">
      {/* Background */}
      <img
        src={imgSrc}
        alt=""
        className="rounded-xl w-[300px] h-[350px] object-cover"
      />

      {/* Name & Role */}
      <div className="absolute left-0 bottom-[-50px] bg-white border-2 border-solid flex flex-col px-5 py-5 rounded-2xl w-4/5">
        <span className="text-xl font-semibold text-left">{name}</span>
        <span className="text-base font-medium text-left">{role}</span>
      </div>
    </div>
  );
}

export default MemberCard;
