import React from "react";
import Box from "../components/common/Box";
import Header from "../components/common/Header";
import IconPicker from "../components/common/IconPicker";
import SideBar from "../components/common/SideBar";

const Category = () => {
  return (
    <div>
      <SideBar />

      <div className="pl-60 flex flex-col gap-5">
        {/* <Box>123</Box> */}
        <Header title="My Budgets"/>
        <div>
          <Box>123</Box>
          <IconPicker/>
        </div>
      </div>
    </div>
  );
};

export default Category;
