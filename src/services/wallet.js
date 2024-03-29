import axiosInstance from "./axios";

export const createWallet = async (
  name,
  amount,
  color,
  icon,
  description,
  exchangeAmount
) => {
  const res = await axiosInstance.post("/wallet", {
    name,
    amount,
    color,
    icon,
    description,
    exchangeAmount,
  });

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getWallets = async () => {
  const res = await axiosInstance.get("/wallet/view");

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getWallet = async (id) => {
  const res = await axiosInstance.get(`/wallet/view/${id}`);
  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const deleteWallet = async (id) => {
  const res = await axiosInstance.delete(`/wallet/delete/${id}`);

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const updateWallet = async (
  id,
  name,
  amount,
  color,
  icon,
  description
) => {
  const res = await axiosInstance.put(`/wallet/update/${id}`, {
    name,
    amount,
    color,
    icon,
    description,
  });

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};
