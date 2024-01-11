import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  async function fetchData() {
    try {
      await axiosInstance
      .getProfile()
      .then((res) => {
        console.log(res);
        setUserInfo(res);
      })
      .catch((err) => {
        setUserInfo(null);
      });
    } catch(err) {
      setUserInfo(null)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  // console.log(userInfo);

  return(
    <AuthContext.Provider value={{userInfo, fetchData}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
