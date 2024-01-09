import React, { useState, useEffect } from "react";

import * as axiosInstance from "../services/statistics";
import Select from "../components/common/Select";
import SideBar from "../components/common/SideBar";
import Text from "../components/common/Text";
import Header from "../components/common/Header";
import DetailChartCategory from "../components/Statistics/DetailChartCategory";

const CategoryDetailPage = () => {
  return (
    <>
      <SideBar />
      <div className="pl-56 flex flex-col gap-5 mb-10">
        {/* NavBar */}
        <div className="sticky top-0 bg-white z-10 ml-4">
          <Header title="Statistic" username="Anh Bui" />
        </div>
        <div className="px-10">
          <DetailChartCategory categoryID="658e99463f4a2d1d811e398d" currency="VND"/>
        </div>
      </div>
    </>
  );
};

export default CategoryDetailPage;
