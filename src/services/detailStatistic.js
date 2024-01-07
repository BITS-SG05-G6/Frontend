import axiosInstance  from "./axios";

//Chart 1
export const getCategoryStatisticsWeek = async(currency,categoryID) => {
    const res = await axiosInstance.get(`/statisticdetail/category/week/${categoryID}/${currency}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByDate;
        }
      } catch (err) {
        return err;
      }

}