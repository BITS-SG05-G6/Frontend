import axiosInstance  from "./axios";

//Chart 1
export const getCategoryStatisticsWeek = async(categoryId) => {
    const res = await axiosInstance.get(`/statisticdetail/category/week/${categoryId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByDate;
        }
      } catch (err) {
        return err;
      }

}

export const getCategoryStatisticsThisMonth = async(categoryId) => {
  const res = await axiosInstance.get(`/statisticdetail/category/thismonth/${categoryId}`);
  try {
      if (res.status === 200) {
        return res.data.totalsByDate;
      }
    } catch (err) {
      return err;
    }

}

export const getCategoryStatisticsLastMonth = async(categoryId) => {
  const res = await axiosInstance.get(`/statisticdetail/category/lastmonth/${categoryId}`);
  try {
      if (res.status === 200) {
        return res.data.totalsByDate;
      }
    } catch (err) {
      return err;
    }

}

//Wallet Detail
export const getWalletStatisticsWeek = async(walletID) => {
  const res = await axiosInstance.get(`/statisticdetail/wallet/week/${walletID}`);
  try {
      if (res.status === 200) {
        return res.data.totalsByDate;
      }
    } catch (err) {
      return err;
    }

}
export const getWalletStatisticsThisMonth = async(walletID) => {
  const res = await axiosInstance.get(`/statisticdetail/wallet/thismonth/${walletID}`);
  try {
      if (res.status === 200) {
        return res.data.totalsByDate;
      }
    } catch (err) {
      return err;
    }

}
export const getWalletStatisticsLastMonth = async(walletID) => {
  const res = await axiosInstance.get(`/statisticdetail/wallet/lastmonth/${walletID}`);
  try {
      if (res.status === 200) {
        return res.data.totalsByDate;
      }
    } catch (err) {
      return err;
    }

}