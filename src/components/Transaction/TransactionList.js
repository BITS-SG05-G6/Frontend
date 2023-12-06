import TransactionCard from "./TransactionCard";
import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

function TransactionList({selectedDate}) {

    // Set transaction list
    const [transactions, setTransactions] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        // Fetch transactions based on user Id and date
        async function fetchTransactions() {
            try {
                // Extract user id from URL
                const userParam = userId;
                const formattedDate = selectedDate.toISOString().split('T')[0];
                // Recieve response
                const response = await axios.get("", {
                    params: {
                        userId: userParam,
                        date: formattedDate
                    }
                }); // Not define link yet
                setTransactions(response.data);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchTransactions()
    }, [userId, selectedDate]);

    return (
        <div className="overflow-x-auto">
            <table className="table table-sm">
                <thead>
                    <tr className="text-[#78778B] uppercase">
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <TransactionCard
                            key={transaction._id}
                            title={transaction.title}
                            category={transaction.category}
                            amount={`${transaction.amount}VND`} />
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default TransactionList;