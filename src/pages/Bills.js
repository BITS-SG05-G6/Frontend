import React, { useContext } from "react";
import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import BillCard from "../components/Bill/BillCard";
import BillForm from "../components/Bill/BillForm";
import { BillContext } from "../context/billContext";

function Bills() {
  const { bills } = useContext(BillContext);
  return (
    <div className="flex flex-row">
      <SideBar />
      {/* Page Content */}
      <div className="pl-64 flex flex-col gap-5 w-full">
        <Header title="Invoices" username="Tom Vo" />
        <div className="flex justify-end px-6">
            <BillForm/>
          </div>
        <div className="px-10 grid grid-cols-4 gap-6">
          
          {bills.map((bill) => (
            <BillCard
            bill={bill}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bills;
