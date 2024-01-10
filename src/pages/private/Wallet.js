import React, { useContext } from "react";
import Card from "../../components/common/Card";
import * as axiosInstance from "../../services/wallet";
import { WalletContext } from "../../context/walletContext";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

const Wallet = () => {
  const { wallets, handleUpdateWallet } = useContext(WalletContext);
  const { isMessageVisible, message, notiType} = useContext(NotificationContext);

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
    {
      isMessageVisible && (
        <Alert message={message} type={notiType}/>
      )
    }
      <div className="grid gap-10 grid-cols-4 px-10">
        <Card add="wallet" />
        {wallets.map((wallet) => (
            <Card
              key={wallet._id}
              icon={wallet.icon}
              color={wallet.color}
              name={wallet.name}
              amount={wallet.amount}
              variety="Wallet"
              id={wallet._id}
              currency={wallet.currency}
              handleDel={() => {
                handleDel(wallet._id)
              }}
              href={`/wallets/${wallet._id}`}
            />
        ))}
      </div>
    </>
  );
};

export default Wallet;
