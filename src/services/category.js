import axiosInstance from "./axios";

export const createCategory = async (
  name,
  type,
  color,
  icon,
  description,
  budget
) => {
  const res = await axiosInstance.post("/category/create", {
    name,
    type,
    color,
    icon,
    description,
    budget,
  });

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const updateCategory = async (
  id,
  name,
  type,
  color,
  icon,
  description,
  budget
) => {
  try {
    const res = await axiosInstance.put(`/category/update/${id}`, {
      name,
      type,
      color,
      icon,
      description,
      budget,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const deleteCategory = async (id) => {
  const res = await axiosInstance.delete(`/category/delete/${id}`);

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getCategories = async () => {
  const res = await axiosInstance.get(`/category/view`);

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getCategory = async (id) => {
  const res = await axiosInstance.get(`/category/view/${id}`);

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};
