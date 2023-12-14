import React from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";

const Category = () => {
  return (
    <div>
      <SideBar />

      <div className="pl-60 flex flex-col gap-5">
        <Header title="My Budgets" />

        <div className="flex justify-end px-6 gap-4">
          <Button>Expense</Button>
          <Button variant="roundOutline">Income</Button>
        </div>
        <div className="grid gap-10 grid-cols-4 px-10">
          <Card icon="file-invoice-dollar" color="#0077FF" />
          <Card icon="file-invoice-dollar" color="#0077FF" />
          <Card icon="file-invoice-dollar" color="#0077FF" />
          <Card icon="file-invoice-dollar" color="#0077FF" />
          <Card add={true}/>
        </div>
      </div>
    </div>
  );
};

export default Category;
