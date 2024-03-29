import axiosInstance from "./axios";

export const createTransaction = async(amount, description, date, transactionType, type, title, category, wallet, currency, exchangeAmount, saving) => {
  const res = await axiosInstance.post("transaction/create", {amount, description, date, transactionType, type, title, category, wallet, currency, exchangeAmount, saving})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const deleteTransaction = async (transactionId) => {
  const res = await axiosInstance.delete(`transaction/delete/${transactionId}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const getTransactions = async (date) => {
  try {
    let res;
    if (date) {
      res = await axiosInstance.get(`transaction/viewall/?date=${date}`);
    }
    else {
      res = await axiosInstance.get(`transaction/viewall`)
    }
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err
  }
}

export const getTransactionDetail = async (transactionId) => {
  const res = await axiosInstance.get(`transaction/${transactionId}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const updateTransaction = async(id, title, date, category, type, wallet, currency, amount, exchangeAmount, description, goal) => {
  const res = await axiosInstance.put(`transaction/update/${id}`, {title, date, category, type, wallet, currency, amount, exchangeAmount, description, goal})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}
