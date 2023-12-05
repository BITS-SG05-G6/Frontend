import React from 'react';
import * as axiosInstance from "../services/axiosService"
function Test() {
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const description = "desription";
      const amount = 11;
      const date = "2023-12-4";
      const transactionType = null;
      const userId = "656da7668a456e1316715912";
      const type = "Expense"
      await axiosInstance.createTransaction(description, amount, date, transactionType, type, userId)
      .then((res) => {
        console.log(res)
      })
    } catch (err) {
      console.log(err.response.data.message.error)
    }
  }

  const handleDelete = async(e) => {
    e.preventDefault();

    try {
      const userId = "656da7668a456e1316715912";
      const tID = "656df9bac307c20452e17107";

      await axiosInstance.deleteTransaction(userId, tID)
      .then((res) => {
        console.log(res);
      })

    } catch (err) {
      console.log(err.response.data.message.error)
    }
  }

  const viewAll = async(e) => {
    e.preventDefault();

    try {
      const userId = "656da7668a456e1316715912";
      const sD = "2023-12-2";
      const eD = "2023-12-6";

      await axiosInstance.getTransactions(userId, sD, eD)
      .then((res) => {
        console.log(res)
      })
    } catch (err) {
      console.log(err.response.data.message.error)
    }
  }

  const getDetail = async(e) => {
    e.preventDefault();

    try {
      const userId = "656da7668a456e1316715912";
      const tId = "656da834506d4342ec452ece";

      await axiosInstance.getTransactionDetail(userId, tId)
      .then((res) => {
        console.log(res);
      })
    } catch (err) {
      console.log(err.response.data.message.error)
    }
  }

  
  return (
    <div className='gap-6 flex'>
      <button className='btn btn-primary' onClick={handleSubmit}>create</button>

      <button className='btn btn-neutral' onClick={handleDelete}>delete</button>

      <button className='btn btn-secondary' onClick={viewAll}>all transactions</button>

      <button className='btn' onClick={getDetail}>transaction detail</button>
    </div>
  );
}

export default Test;
