import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryDetails from "../../components/Category/CategoryDetails";
import DetailChartCategory from "../../components/Statistics/DetailChartCategory";
import * as categoryService from "../../services/category";
import TransactionList from "../../components/Transaction/TransactionList";
import { CategoryContext } from "../../context/categoryContext";
import Loading from "../../components/common/Loading";

function CategoryDetail() {
  const { id } = useParams();
  const { isUpdate, isLoading, setIsLoading, handleUpdateCategory } = useContext(CategoryContext);
  const [category, setCategory] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        // Fetch data based on the params id
        const categoryData = await categoryService.getCategory(id);
        console.log(categoryData);
        if (categoryData) {
          setCategory(categoryData.category);
          setTransactions(categoryData.transactions);
        }
        handleUpdateCategory();
      } catch (err) { }
      finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
    fetchData();
  }, [id, isUpdate]);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-3">
        <div className="flex flex-col gap-10">
          <DetailChartCategory categoryId={id} />
          <TransactionList transactions={transactions} />
        </div>
        {/* render the components based on the data fetching */}
        <CategoryDetails category={category} />
      </div>
        </>
      )}
    </>
  );
}

export default CategoryDetail;
