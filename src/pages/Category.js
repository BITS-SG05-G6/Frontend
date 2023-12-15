import React, { useContext, useEffect, useState } from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import { CategoryContext } from "../context/categoryContext";

const Category = () => {
  const { type, setType, categories } = useContext(CategoryContext);
  return (
    <div>
      <SideBar />

      <div className="pl-60 flex flex-col gap-5">
        <Header title="My Budgets" />

        <div className="flex justify-end px-6 gap-4">
          <Button
            variant={type === "Expense" ? "" : "roundOutline"}
            onClick={() => setType("Expense")}
          >
            Expense
          </Button>
          <Button
            variant={type === "Income" ? "" : "roundOutline"}
            onClick={() => setType("Income")}
          >
            Income
          </Button>
        </div>

        <div className="grid gap-10 grid-cols-4 px-10">
          {categories.map((category) => (
           category.type === type ?  <Card
           icon={category.icon}
           color={category.color}
           name={category.name}
           amount={category.amount}
         /> : null
          ))}
          <Card add={true} type={type} />
        </div>
      </div>
    </div>
  );
};

export default Category;
