import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/wallet";
import { AuthContext } from "./authContext";
import { TransactionContext } from "./transactionContext";

export const WalletContext = createContext(null);

const WalletProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext)
  // console.log(userInfo);
  const { handleUpdateTransaction } = useContext(TransactionContext)

  const [newWallet, setNewWallet] = useState(false);

  const handleUpdateWallet = () => {
    setNewWallet(newWallet === "true" ? "false" : "true");
  };

  const [wallets, setWallets] = useState([
    {
      id: "",
      name: "",
      icon: "",
      color: "",
      amount: 0,
      currency: ""
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance.getWallet().then((res) => {
          setWallets(res);
        });
      } catch (err) {
        setWallets([{
          id: "",
          name: "",
          icon: "",
          color: "",
          currency: ""
        }]);
      }
    }

    fetchData();
  }, [userInfo?.id, newWallet, handleUpdateTransaction]);

  const walletList = {
    handleUpdateWallet,
    wallets,
  };

  return (
    <WalletContext.Provider value={walletList}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
