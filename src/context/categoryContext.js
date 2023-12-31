import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/category";
import { AuthContext } from "./authContext";
import { TransactionContext } from "./transactionContext";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext)
  // console.log(userInfo);

  const { handleUpdateTransaction } = useContext(TransactionContext)
  const [newCategory, setNewCategory] = useState(false);

  const handleUpdateCategory = () => {
    setNewCategory(newCategory === true ? false : true);
  };

  const [type, setType] = useState("Expense");
  const [categories, setCategories] = useState([
    {
      id: "",
      name: "",
      icon: "",
      color: "",
      amount: 0
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance.getCategory().then((res) => {
          setCategories(res);
        });
      } catch (err) {
        setCategories([{
          id: "",
          name: "",
          icon: "",
          color: "",
          amount: 0
        }]);
      }
    }

    fetchData();
  }, [userInfo?.id, type, newCategory, handleUpdateTransaction]);

  const categoryList = {
    handleUpdateCategory,
    type,
    setType,
    categories,
  };

  return (
    <CategoryContext.Provider value={categoryList}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
