import axiosInstance  from "./axios";

//Chart 1
export const statisticExpensesWeekly = async(userId) => {
    const res = await axiosInstance.get(`/statistic/trend/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByDay;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesMonthly = async(userId) => {
    const res = await axiosInstance.get(`/statistic/trend/thismonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.totalsByWeek;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/trend/lastmonth/${userId}`);
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
  const res = await axiosInstance.get(`/statistic/distribution/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}
export const ExpensesDistributionLastWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/distribution/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}
export const ExpensesDistributionLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/distribution/month/${userId}`);
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
  const res = await axiosInstance.get(`/statistic/catin/lastweek/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryIncomeLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/catin/lastmonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryIncomeTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/catin/total/${userId}`);
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
  const res = await axiosInstance.get(`/statistic/catex/lastweek/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryExenseLastMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/catex/lastmonth/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryExenseTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/catex/total/${userId}`);
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
  const res = await axiosInstance.get(`/statistic/exin/month/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const compareExpenseIncomeByWeek = async(userId) => {
  const res = await axiosInstance.get(`/statistic/exin/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const compareExpenseIncomeTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/exin/total/${userId}`);
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
  const res = await axiosInstance.get(`/statistic/walletex/week/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const walletExenseMonth = async(userId) => {
  const res = await axiosInstance.get(`/statistic/walletex/month/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const walletExenseTotal = async(userId) => {
  const res = await axiosInstance.get(`/statistic/walletex/total/${userId}`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}