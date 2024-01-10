import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import DetailPageLayout from "../../components/layout/DetailPageLayout";
import CategoryDetails from "../../components/Category/CategoryDetails";
import DetailChartCategory from "../../components/Statistics/DetailChartCategory";
import * as categoryService from "../../services/category"
import TransactionList from '../../components/Transaction/TransactionList';

function CategoryDetail() {
    const { id } = useParams();

    const [category, setCategory] = useState({});
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch data based on the params id 
                const categoryData = await categoryService.getCategory(id);
                console.log(categoryData);
                if (categoryData) {
                    setCategory(categoryData.category);
                    setTransactions(categoryData.transactions);
                }
            }
            catch (err) {

            }
        }
        fetchData();
    }, [id])


    return (
        <DetailPageLayout>
            <div className="flex flex-col flex-1 gap-10 pr-5">
                <DetailChartCategory categoryId={id}/>
                <TransactionList transactions={transactions} />
            </div>
            {/* render the components based on the data fetching */}
            <CategoryDetails category={category} />
        </DetailPageLayout>
    )

}

export default CategoryDetail;