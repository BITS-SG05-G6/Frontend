import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import ProgressCard from "../components/common/ProgressCard";
import Card from "../components/common/Card";
import * as axiosInstance from "../services/wallet";
import { WalletContext } from "../context/walletContext";

const Wallet = () => {
  const { wallets } = useContext(WalletContext);
  return (
    <div>
      <SideBar />
      <div className="pl-60 flex flex-col gap-5">
        <Header title={"My Wallet"} username={"Anh Pham"} />
          
         
         <div className="grid gap-10 grid-cols-4 px-10">
         <Card add="wallet"/>
          {wallets.map((wallet) => (
            <Card
           icon={wallet.icon}
           color={wallet.color}
           name={wallet.name}
           amount={wallet.amount}
           variety="Wallet"
           id={wallet.id}
         /> 
          ))}
          
        </div>
         {/* <Card
           icon="file-invoice-dollar"
           color="#FCAC12"
           name="Wallet 1"
           amount="10000"
          /> */}
      
      </div>
    </div>
  );
};

export default Wallet;
