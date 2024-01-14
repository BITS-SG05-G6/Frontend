import TransactionCard from "./TransactionCard";
import Text from "../common/Text";
import * as axiosInstance from "../../services/transactions";
import { useContext } from "react";
import { TransactionContext } from "../../context/transactionContext";
import { NotificationContext } from "../../context/notificationContext";

function TransactionList({ transactions }) {
  const { setIsMessageVisible, setMessage, setNotiType } = useContext(NotificationContext);
  const { handleUpdateTransaction } = useContext(TransactionContext);
  const handleDel = async(id) => {
    await axiosInstance.deleteTransaction(id)
    .then((res) => {
      handleUpdateTransaction();
      setMessage(res.message);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="px-10">
      {transactions ? (
        <table className="table table-sm text-center">
          <thead>
            <tr className="text-[#78778B] uppercase">
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionCard
                transaction={transaction}
                handleDel={() => handleDel(transaction._id)}
              />
            ))}
          </tbody>
        </table>
      ) :
        (
          <div className="flex flex-col justify-center items-center">
            <img src={require("../../assets/notransaction.png")} width='15%' height='15%' alt="no transaction" className=""></img>
            <div>
              <Text className='text-slate-400' variant='text-sm'>No transaction so far!</Text>
            </div>
          </div>
        )}

    </div>
  );
}

export default TransactionList;
