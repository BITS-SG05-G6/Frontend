import axiosInstance from './axios';

export const createCategory = async(name, type, color, icon, description) => {
  const res = await axiosInstance.post("/category/create", {name, type, color, icon, description})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const deleteCategory = async(id) => {

}

export const getCategory = async() => {
  const res = await axiosInstance.get(`/category/view`)

  try {
    if (res.status === 200) {
      return res.data
    }
  } catch(err) {
    return err
  }
}