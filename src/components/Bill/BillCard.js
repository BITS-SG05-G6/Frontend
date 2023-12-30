import React from "react";
import Badge from "../common/Badge";
import Button from "../common/Button";

function BillCard({ title, amount, dueDate, frequency, status }) {
  // const status =

  return (
    <div className="rounded-lg px-6 py-6 flex flex-col gap-4 w-72 border-solid border-2 border-gray-200">
      {/* Title */}
      <span className="text-xl font-bold">{title}</span>
      {/* Line */}
      <div className="w-full h-[1px] bg-gray-400"></div>

      <div className="flex flex-col gap-2">
        {/* Next Due Date */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Amount:</span>
          <span className="text-base font-normal">${amount}</span>
        </div>

        {/* Next Due Date */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Due Date:</span>
          <span className="text-base font-normal">{dueDate}</span>
        </div>

        {/* Frequency */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Frequency:</span>
          <span className="text-base font-normal">{frequency}</span>
        </div>

        {/* Status */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Status:</span>
          <Badge status={status} variant={status === "Paid" ? "green" : "yellow"}/>
        </div>
      </div>
      {/* Line */}
      <div className="w-full h-[1px] bg-gray-400"></div>

      {/* Buttons */}
      <div className="flex flex-row w-full gap-2">
        <Button
          className={"ml-auto"}
          variant={"redButton"}
          children={"Cancel"}
          size={"sm"}
        />
        <Button variant={"blueButton"} children={"Pay"} size={"sm"} />
      </div>
    </div>
  );
}

export default BillCard;
