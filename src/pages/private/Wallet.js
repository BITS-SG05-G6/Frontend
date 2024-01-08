import React, { useContext } from "react";
import Header from "../../components/common/Header";
import SideBar from "../../components/common/SideBar";
import Card from "../../components/common/Card";
import * as axiosInstance from "../../services/wallet";
import { WalletContext } from "../../context/walletContext";

const Wallet = () => {
  const { wallets, handleUpdateWallet } = useContext(WalletContext);
  const handleDel = async (id) => {
    await axiosInstance.deleteWallet(id)
      .then((res) => {
        console.log(res);
        handleUpdateWallet();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <div className="grid gap-10 grid-cols-4 px-10">
        <Card add="wallet" />
        {wallets.map((wallet) => (
          <Card
            icon={wallet.icon}
            color={wallet.color}
            name={wallet.name}
            amount={wallet.amount}
            variety="Wallet"
            id={wallet.id}
            currency={wallet.currency}
            handleDel={() => handleDel(wallet.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Wallet;
