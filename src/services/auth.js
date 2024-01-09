import axiosInstance from "./axios";

export const signup = async (username, password) => {
  const res = await axiosInstance.post("/login", { username, password });

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const signin = async (username, password) => {
  const res = await axiosInstance.post("/signin", { username, password });

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const signout = async () => {
  const res = await axiosInstance.post("/signout");

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getProfile = async () => {
  const res = await axiosInstance.get("/profile");

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const updateProfile = async (userData) => {
  try {
    const res = await axiosInstance.put("/updateprofile", userData);

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};
