import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import WalletForm from "../components/Wallet/WalletForm";
import WalletCard from "../components/Wallet/WalletCard";

const Wallet = () => {
  const { walletId } = useParams();
  return (
    <div>
      <SideBar />
      <div className="pl-60 flex flex-col gap-5">
        <Header title={"My Wallet"} username={"Anh Pham"} />
        <div className="flex justify-end px-6">
          <WalletForm />
        </div>
        <div className="grid gap-10 grid-cols-4 px-20">
          <WalletCard
            title="Wallet 1"
            amount="10000"
            used="4020"
            color={"#61dafb"}
          />
          <WalletCard
            title="Wallet 2"
            amount="10000"
            used="4020"
            color={"#FF66B8"}
          />
          <WalletCard
            title="Wallet 3"
            amount="10000"
            used="4020"
            color={"#AEF231"}
          />
          <WalletCard
            title="Wallet 4"
            amount="10000"
            used="4020"
            color={"#61dafb"}
          />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
