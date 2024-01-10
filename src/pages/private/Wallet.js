import React, { useContext } from "react";
import Card from "../../components/common/Card";
import * as axiosInstance from "../../services/wallet";
import { WalletContext } from "../../context/walletContext";
import { Link } from "react-router-dom";

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
          <Link to={`/wallets/${wallet._id}`}>
            <Card
              key={wallet._id}
              icon={wallet.icon}
              color={wallet.color}
              name={wallet.name}
              amount={wallet.amount}
              variety="Wallet"
              id={wallet._id}
              currency={wallet.currency}
              handleDel={(e) => {
            
                handleDel(wallet._id)
              }}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Wallet;
