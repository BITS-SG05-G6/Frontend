import axiosInstance  from "./axios";

//Chart 1
export const statisticExpensesWeekly = async(userId) => {
    const res = await axiosInstance.get(`/statistic/chart1/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByDay;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesMonthly = async(userId) => {
    const res = await axiosInstance.get(`/statistic/chart1/thismonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByWeek;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart1/lastmonth/${userId}`);
  try {
      if (res.status === 200) {
        return res.data.totalsByWeek;
      }
    } catch (err) {
      return err;
    }

}

//Chart 2
export const ExpensesDistribution = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart2/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}
export const ExpensesDistributionLastWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart2/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}
export const ExpensesDistributionLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart2/month/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}

//Chart 3
export const categoryIncomeLastWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart3/lastweek/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryIncomeLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart3/lastmonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryIncomeTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart3/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

//Chart 4
export const categoryExenseLastWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart4/lastweek/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryExenseLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart4/lastmonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryExenseTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart4/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

//Chart 5
export const compareExpenseIncomeByMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart5/month/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const compareExpenseIncomeByWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart5/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const compareExpenseIncomeTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart5/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

//Chart 6
export const walletExenseWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart6/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const walletExenseMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart6/month/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const walletExenseTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/chart6/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}