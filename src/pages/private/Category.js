import React, { useContext } from "react";
import Alert from "../../components/common/Alert";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import { CategoryContext } from "../../context/categoryContext";
import { NotificationContext } from "../../context/notificationContext";
import * as axiosInstance from "../../services/category";

const Category = () => {
  const { type, setType, categories, handleUpdateCategory } =
    useContext(CategoryContext);
    const { isMessageVisible, message, notiType} = useContext(NotificationContext);

  const handleDel = async (id) => {
    await axiosInstance
      .deleteCategory(id)
      .then((res) => {
        console.log(res);
        handleUpdateCategory();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
{
      isMessageVisible && (
        <Alert message={message} type={notiType}/>
      )
    }
      <div className="flex justify-end px-6 gap-4">
        <Button
          variant={type === "Expense" ? "" : "roundOutline"}
          onClick={() => setType("Expense")}
        >
          Expense
        </Button>
        <Button
          variant={type === "Income" ? "" : "roundOutline"}
          onClick={() => setType("Income")}
        >
          Income
        </Button>
      </div>

      <div className="grid gap-10 grid-cols-4 px-10">
        <Card add="category" type={type} />
        {categories.map((category) =>
          category.type === type ? (
            <Card
              id={category.id}
              icon={category.icon}
              color={category.color}
              name={category.name}
              amount={category.budget}
              handleDel={() => handleDel(category.id)}
              type={category.type}
              variety="Category"
            />
          ) : null
        )}
      </div>
    </>
  );
};

export default Category;
