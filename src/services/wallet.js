import axiosInstance  from "./axios";

export const createWallet = async(name, amount, color, icon, description) => {
  const res = await axiosInstance.post("/wallet", {name, amount, color, icon, description})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

export const getWallet = async() => {
  const res = await axiosInstance.get("/wallet/view")

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

export const deleteWallet = async(id) => {
  const res = await axiosInstance.delete(`/wallet/delete/${id}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}