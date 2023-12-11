import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  }
})

axiosInstance.interceptors.request.use(function(config) {
  config.headers.authorization = Cookies.get('token');
  return config;
})

export const signup = async(username, password) => {
  const res = await axiosInstance.post("/signup", {username, password});

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const signin = async(username, password) => {
  const res = await axiosInstance.post("/signin", {username, password});

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const createTransaction = async(amount, description, date, transactionType, type, title) => {
  const res = await axiosInstance.post("transaction/create", {amount, description, date, transactionType, type, title})

  try {
    if (res.status === 200) {
      return res.data;
    } 
  } catch (err) {
    return err;
  }
}

export const deleteTransaction = async(userId, transactionId) => {
  const res = await axiosInstance.delete(`transaction/delete/${userId}/${transactionId}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const getTransactions = async(userId, startDate, endDate) => {
  let res;
  if (startDate && endDate) {
    res = await axiosInstance.get(`transaction/viewall/${userId}/?startDate=${startDate}&endDate=${endDate}`)
  } else {
    res = await axiosInstance.get(`transaction/viewall/${userId}`)
  }

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err
  }
}

export const getTransactionDetail = async(userId, transactionId) => {
  const res = await axiosInstance.get(`transaction/${userId}/${transactionId}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

