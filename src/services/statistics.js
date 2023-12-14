import axiosInstance  from "./axios";

export const statisticExpensesWeekly = async(userId) => {
    const res = await axiosInstance.get(`/statistic/last7days/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByDay;
        }
      } catch (err) {
        return err;
      }

}



export const statisticExpensesMonthly = async(userId) => {
    const res = await axiosInstance.get(`/statistic/lastmonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByWeek;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesDistribution = async(userId) => {
  const res = await axiosInstance.get(`/statistic/frequencydistribution/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}