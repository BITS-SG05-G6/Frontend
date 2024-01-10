import { format } from "date-fns";
import React, { useContext } from "react";
import Badge from "../common/Badge";
import Button from "../common/Button";
import * as axiosInstance from "../../services/bill";
import { BillContext } from "../../context/billContext";
import { formatMoney } from "../../utils/formatMoney";
import { NotificationContext } from "../../context/notificationContext";
import ConfirmationModal from '../common/ConfirmationModal';

function BillCard({ bill }) {
  const { setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);

  // const status =
  const { handleUpdateBill } = useContext(BillContext);

  const handleDel = async() => {
    // console.log(bill._id);
    await axiosInstance.deleteBill(bill._id)
    .then((res) => {
      // console.log(res);
      handleUpdateBill();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handlePay = async() => {
    await axiosInstance.payBill(bill._id)
    .then((res) => {
      // console.log(res);
      handleUpdateBill();
      setMessage(res);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="rounded-lg px-6 py-6 flex flex-col gap-4 w-72 border-solid border-2 border-gray-200">
      {/* Title */}
      <span className="text-xl font-bold">{bill.title}</span>
      {/* Line */}
      <div className="w-full h-[1px] bg-gray-400"></div>

      <div className="flex flex-col gap-2">
        {/* Next Due Date */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Amount:</span>
          <span className="text-base font-normal">{formatMoney(bill.amount, bill.currency)}</span>
        </div>

        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Start Date:</span>
          <span className="text-base font-normal">{format(new Date(bill.startDate), "dd MMM yyyy")}</span>
        </div>

        
          {/* Next Due Date */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Due Date:</span>
          <span className="text-base font-normal">{bill.reminder ? format(new Date(bill.nextDueDate), "dd MMM yyyy") : "None"}</span>
        </div>

        {/* Frequency */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Frequency:</span>
          <span className="text-base font-normal">{bill.reminder ? bill.frequency : "None"}</span>
        </div>
       


        {/* Status */}
        <div className="flex flex-row w-full justify-between">
          <span className="text-base font-semibold">Status:</span>
          <Badge status={bill.status} variant={bill.status === "Paid" ? "green" : "yellow"}/>
        </div>
      </div>
      {/* Line */}
      <div className="w-full h-[1px] bg-gray-400"></div>

      {/* Buttons */}
      <div className="flex flex-row w-full gap-2 justify-end">
        {/* <Button
          className={"ml-auto"}
          variant={"redButton"}
          children={"Cancel"}
          size={"sm"}
          onClick={handleDel}
        /> */}
        
        <ConfirmationModal
            idModal={`deleteConfirmation${bill._id}`} 
            btnName="Cancel"
            btnSize="small"
            btnType="button"
            onSubmit={handleDel} 
            message={`Are you sure you want to cancel this "${bill.title}" invoice?`}
            variant="redButton"
            
          />
        <Button variant={"blueButton"} children={"Pay"} size={"sm"} onClick={handlePay} disabled={bill.status === "Paid"}/>
      </div>
    </div>
  );
}

export default BillCard;
