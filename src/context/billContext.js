import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/bill";
import { AuthContext } from "./authContext";

export const BillContext = createContext(null);

const BillProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [newBill, setNewBill] = useState(false);

  function handleLoading() {
    setIsLoading(!isLoading);
  }

  const handleUpdateBill = () => {
    setIsLoading(true);
    setNewBill(newBill === true ? false : true);
  };

  const [bills, setBills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance
          .getAllBills()
          .then((res) => {
            setBills(res);
            setTimeout(handleLoading, 1000);
          })
          .catch((err) => {
            setBills(null);
          });
      } catch (err) {
        setBills(null);
      } finally {
        setIsLoading(true);
      }
    }

    fetchData();
  }, [userInfo?.id, newBill]);

  const billList = {
    bills,
    handleUpdateBill,
    isLoading,
    handleLoading,
    setIsLoading,
  };

  return (
    <BillContext.Provider value={billList}>{children}</BillContext.Provider>
  );
};

export default BillProvider;
