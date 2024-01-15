import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/wallet";
import { AuthContext } from "./authContext";
import { TransactionContext } from "./transactionContext";

export const WalletContext = createContext(null);

const WalletProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const { handleUpdateTransaction } = useContext(TransactionContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newWallet, setNewWallet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleUpdateWallet = () => {
    setIsLoading(true);
    setNewWallet(!newWallet);
  };

  const [wallets, setWallets] = useState([
    {
      id: "",
      name: "",
      icon: "",
      color: "",
      amount: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        await axiosInstance.getWallets().then((res) => {
          setWallets(res);
        });
      } catch (err) {
        setWallets([
          {
            id: "",
            name: "",
            icon: "",
            color: "",
          },
        ]);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }

    fetchData();
  }, [userInfo?.id, newWallet, handleUpdateTransaction]);

  const walletList = {
    handleUpdateWallet,
    wallets,
    isUpdate,
    setIsUpdate,
    isLoading,
    setIsLoading,
  };

  return (
    <WalletContext.Provider value={walletList}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
