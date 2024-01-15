import React, { useContext } from "react";
import Alert from "../../components/common/Alert";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import { CategoryContext } from "../../context/categoryContext";
import { NotificationContext } from "../../context/notificationContext";
import * as axiosInstance from "../../services/category";
import Loading from "../../components/common/Loading";

const Category = () => {
  const { type, setType, categories, handleUpdateCategory, isLoading } =
    useContext(CategoryContext);
  const {
    setMessage,
    setIsMessageVisible,
    setNotiType,
    isMessageVisible,
    message,
    notiType,
  } = useContext(NotificationContext);

  const handleDel = async (id) => {
    await axiosInstance
      .deleteCategory(id)
      .then((res) => {
        handleUpdateCategory();
        setMessage(res);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
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
          <div className="flex justify-end gap-4 px-6">
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

          <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card add="category" type={type} />
            {categories.map((category) =>
              category.type === type ? (
                <div className="flex items-center justify-center">
                  <Card
                    id={category._id}
                    icon={category.icon}
                    color={category.color}
                    name={category.name}
                    amount={category.budget}
                    handleDel={() => handleDel(category._id)}
                    type={category.type}
                    href={`/category/${category._id}`}
                    variety="Category"
                  />
                </div>
              ) : null,
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Category;
