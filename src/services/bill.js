import axiosInstance from './axios';

export const createBill = async(title, amount, currency, reminder, startDate, frequency, description, exchangeAmount) => {
  const res = await axiosInstance.post("bill/", {title, amount, currency, reminder, startDate, frequency, description, exchangeAmount})

  try {
    if (res.status === 200) {
      return res.data
    }
  } catch(err) {
    return err;
  }
}

export const getAllBills = async() => {
  const res = await axiosInstance.get("bill/")

  try {
    if (res.status === 200) {
      return res.data
    }
  } catch(err) {
    return err;
  }
}

export const deleteBill = async(id) => {
  const res = axiosInstance.delete(`bill/${id}`)

  try {
    if (res.status === 200) {
      return res.data
    }
  } catch(err) {
    return err;
  }
}

export const payBill = async(id) => {
  const res = await axiosInstance.put(`bill/pay/${id}`)
  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}