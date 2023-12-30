import React from "react";
import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import BillCard from "../components/Bill/BillCard";
import BillForm from "../components/Bill/BillForm";

function Bills() {
  return (
    <div className="flex flex-row">
      <SideBar />
      {/* <BillForm buttonName="Create Bill" icon="file-invoice-dollar" /> */}
      {/* Page Content */}
      <div className="pl-64 flex flex-col gap-5 w-full">
        <Header title="Bills" username="Tom Vo" />
        <div className="px-10 grid grid-cols-4 gap-6">
          <BillForm/>
          <BillCard
            amount={"100"}
            title={"Netflix"}
            dueDate={"01/01/2024"}
            frequency={"Weekly"}
            status={"Paid"}
          />
          <BillCard
            amount={"100"}
            title={"Netflix"}
            dueDate={"01/01/2024"}
            frequency={"Weekly"}
            status={"Paid"}
          />
          <BillCard
            amount={"100"}
            title={"Netflix"}
            dueDate={"01/01/2024"}
            frequency={"Weekly"}
            status={"Paid"}
          />
          <BillCard
            amount={"100"}
            title={"Netflix"}
            dueDate={"01/01/2024"}
            frequency={"Weekly"}
            status={"Pending"}
          />
        </div>
      </div>
    </div>
  );
}

export default Bills;
