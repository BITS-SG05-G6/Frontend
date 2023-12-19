import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import ProgressCard from "../components/common/ProgressCard";

const Wallet = () => {
  const { walletId } = useParams();
  return (
    <div>
      <SideBar />
      <div className="pl-60 flex flex-col gap-5">
        <Header title={"My Wallet"} username={"Anh Pham"} />
        <div className="grid gap-10 grid-cols-4 px-20">
          <ProgressCard icon="file-invoice-dollar"
           color="#61dafb"
           name="Test"
           amount="10000"
           used="4020"
           />

<ProgressCard icon="file-invoice-dollar"
           color="#7F3DFF"
           name="Test"
           amount="10000"
           used="0"
           />


<ProgressCard icon="file-invoice-dollar"
           color="#FCAC12"
           name="Test"
           amount="10000"
           used="4020"
           />

<ProgressCard icon="file-invoice-dollar"
           color="#FD3C4A"
           name="Test"
           amount="10000"
           used="4020"
           />
         
         <ProgressCard add={true}/>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
