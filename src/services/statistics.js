import axiosInstance  from "./axios";

//Chart 1
export const statisticExpensesWeekly = async() => {
    const res = await axiosInstance.get(`/statistic/trend/week`);
    try {
        if (res.status === 200) {
          return res.data.totalsByDay;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesMonthly = async() => {
    const res = await axiosInstance.get(`/statistic/trend/thismonth`);
    try {
        if (res.status === 200) {
          return res.data.totalsByWeek;
        }
      } catch (err) {
        return err;
      }

}

export const statisticExpensesLastMonth = async() => {
  const res = await axiosInstance.get(`/statistic/trend/lastmonth`);
  try {
      if (res.status === 200) {
        return res.data.totalsByWeek;
      }
    } catch (err) {
      return err;
    }

}

//Chart 2
export const ExpensesDistribution = async() => {
  const res = await axiosInstance.get(`/statistic/distribution/total`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}
export const ExpensesDistributionLastWeek = async() => {
  const res = await axiosInstance.get(`/statistic/distribution/week/`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}
export const ExpensesDistributionLastMonth = async() => {
  const res = await axiosInstance.get(`/statistic/distribution/month`);
    try {
        if (res.status === 200) {
          return res.data.distribution;
        }
      } catch (err) {
        return err;
      }
}

//Chart 3
export const categoryIncomeLastWeek = async() => {
  const res = await axiosInstance.get(`/statistic/catin/lastweek`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryIncomeLastMonth = async() => {
  const res = await axiosInstance.get(`/statistic/catin/lastmonth`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryIncomeTotal = async() => {
  const res = await axiosInstance.get(`/statistic/catin/total`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

//Chart 4
export const categoryExenseLastWeek = async() => {
  const res = await axiosInstance.get(`/statistic/catex/lastweek`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryExenseLastMonth = async() => {
  const res = await axiosInstance.get(`/statistic/catex/lastmonth`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const categoryExenseTotal = async() => {
  const res = await axiosInstance.get(`/statistic/catex/total`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

//Chart 5
export const compareExpenseIncomeByMonth = async() => {
  const res = await axiosInstance.get(`/statistic/exin/month`);
    try {
        if (res.status === 200) {
          console.log(res.data);
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const compareExpenseIncomeByWeek = async() => {
  const res = await axiosInstance.get(`/statistic/exin/week`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const compareExpenseIncomeTotal = async() => {
  const res = await axiosInstance.get(`/statistic/exin/total`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

//Chart 6
export const walletExenseWeek = async() => {
  const res = await axiosInstance.get(`/statistic/walletex/week`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const walletExenseMonth = async() => {
  const res = await axiosInstance.get(`/statistic/walletex/month`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}
export const walletExenseTotal = async() => {
  const res = await axiosInstance.get(`/statistic/walletex/total`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}

export const totalSavingMonthly = async() => {
  const res = await axiosInstance.get(`/statisticdetail/totalsaving`);
    try {
        if (res.status === 200) {
          return res.data;
        }
      } catch (err) {
        return err;
      }
}


