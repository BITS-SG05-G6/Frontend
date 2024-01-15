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
  const { isUpdate, isLoading, setIsLoading, handleUpdateCategory } =
    useContext(CategoryContext);
  const [category, setCategory] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        // Fetch data based on the params id
        const categoryData = await categoryService.getCategory(id);
        if (categoryData) {
          setCategory(categoryData.category);
          setTransactions(categoryData.transactions);
        }
        handleUpdateCategory();
      } catch (err) {
      } finally {
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
          <div className="flex w-full flex-col items-center justify-center gap-10 xl:grid xl:grid-cols-3">
            <div className="flex w-full flex-col gap-10 xl:col-span-2 xl:h-full xl:items-start">
              <DetailChartCategory categoryId={id} />
              <TransactionList transactions={transactions} />
            </div>
            {/* render the components based on the data fetching */}
            <div className="flex w-full items-center justify-center xl:col-span-1 xl:h-full xl:items-start">
              <CategoryDetails category={category} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CategoryDetail;
