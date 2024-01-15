import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/category";
import { AuthContext } from "./authContext";
import { TransactionContext } from "./transactionContext";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const { handleUpdateTransaction } = useContext(TransactionContext);
  const [newCategory, setNewCategory] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleUpdateCategory = () => {
    setIsLoading(true);
    setNewCategory(!newCategory);
  };

  const [type, setType] = useState("Expense");
  const [categories, setCategories] = useState([
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
        await axiosInstance.getCategories().then((res) => {
          setCategories(res);
        });
      } catch (err) {
        setCategories([
          {
            id: "",
            name: "",
            icon: "",
            color: "",
            amount: 0,
          },
        ]);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }

    fetchData();
  }, [userInfo?.id, type, newCategory, handleUpdateTransaction]);

  const categoryList = {
    handleUpdateCategory,
    type,
    setType,
    categories,
    isUpdate,
    setIsUpdate,
    isLoading,
    setIsLoading,
  };

  return (
    <CategoryContext.Provider value={categoryList}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
