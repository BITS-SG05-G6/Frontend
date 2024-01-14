import React, { useContext } from "react";
import Card from "../../components/common/Card";
import * as axiosInstance from "../../services/wallet";
import { WalletContext } from "../../context/walletContext";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";
import Loading from "../../components/common/Loading";

const Wallet = () => {
  const { wallets, handleUpdateWallet, isLoading } = useContext(WalletContext);
  const { setMessage, setIsMessageVisible, setNotiType, isMessageVisible, message, notiType } =
    useContext(NotificationContext);

  const handleDel = async (id) => {
    await axiosInstance
      .deleteWallet(id)
      .then((res) => {
        setMessage(res);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
        handleUpdateWallet();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          {isMessageVisible && <Alert message={message} type={notiType} />}
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
                  handleDel(wallet._id);
                }}
                href={`/wallets/${wallet._id}`}
              />
            ))}
          </div>
        </>)}
    </>
  );
};

export default Wallet;
