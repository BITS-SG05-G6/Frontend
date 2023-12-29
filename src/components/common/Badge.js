import React from "react";

function Badge({ title, status }) {
  const className = {
    Paid: "text-[#07A104] bg-[#E1FFDC] border-[#07A104]",
    Pending: "text-[#E2B102] bg-[#FFF5DC] border-[#E2B102]",
  };

  return (
    <div
      className={`px-6 py-1 flex items-center justify-center ${className[status]} rounded-full w-fit border-[1px]`}
    >
      <span className="text-sm font-bold">{title}</span>
    </div>
  );
}

export default Badge;
