import axiosInstance from './axios';

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