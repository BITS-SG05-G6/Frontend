import React, { useState } from "react";

import DefaultStatistic from '../components/Statistics/DefaultStatistic';
import * as  axiosInstance from "../services/statistics";
import BarChartStatistic from '../components/Statistics/BarChartStatistic';

const TestStatisticPage = () => {
  

  return (
    <>
<DefaultStatistic typeOfData="Weekly"/>     
<DefaultStatistic typeOfData="Monthly"/>  
<BarChartStatistic/>      

    </>
  );
};

export default TestStatisticPage;
