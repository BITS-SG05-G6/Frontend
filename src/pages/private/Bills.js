import React, { useContext } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";
import BillCard from "../../components/Bill/BillCard";
import BillForm from "../../components/Bill/BillForm";
import { BillContext } from "../../context/billContext";

function Bills() {
  const { bills } = useContext(BillContext);
  return (
    <>
      <div className="flex justify-end px-6">
        <BillForm />
      </div>
      <div className="px-10 grid grid-cols-4 gap-6">

        {bills.map((bill) => (
          <BillCard
            bill={bill}
          />
        ))}
      </div>
    </>
  );
}

export default Bills;
