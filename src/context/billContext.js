import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/bill";
import { AuthContext } from "./authContext";

export const BillContext = createContext(null);

const BillProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext)
  // console.log(userInfo);

  const [newBill, setNewBill] = useState(false);

  const handleUpdateBill = () => {
    setNewBill(newBill === true ? false : true);
  };

  const [bills, setBills] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance.getAllBills()
        .then((res) => {
          setBills(res);
        })
        .catch((err) => {
          console.log(err);
        })
        
      } catch (err) {
        
      }
    }

    fetchData();
  }, [userInfo?.id, newBill]);

  const billList = {
    bills,
    handleUpdateBill
  };

  return (
    <BillContext.Provider value={billList}>
      {children}
    </BillContext.Provider>
  );
};

export default BillProvider;
