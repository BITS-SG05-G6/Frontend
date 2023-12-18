import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/category";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [newCategory, setNewCategory] = useState(false);

  const handleAddCategory = () => {
    setNewCategory(newCategory === "true" ? "false" : "true");
  };

  const [type, setType] = useState("Expense");
  const [categories, setCategories] = useState([
    {
      id: "",
      name: "",
      icon: "",
      color: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance.getCategory(type).then((res) => {
          setCategories(res);
        });
      } catch (err) {
        setCategories([{
          id: "",
          name: "",
          icon: "",
          color: ""
        }]);
      }
    }

    fetchData();
  }, [type, newCategory]);

  const categoryList = {
    handleAddCategory,
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
