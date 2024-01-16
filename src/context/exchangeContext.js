import { format } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export const ExchangeContext = createContext(null);

const ExchangeProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext);

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const [rate, setRate] = useState();

  useEffect(() => {
    const key = "a792a2809d1633c295e8d7e282eceecdb3222f97";
    const apiUrl = `https://api.getgeoapi.com/v2/currency/historical/${date}?api_key=${key}&from=USD&to=VND&amount=1&format=json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRate(Math.floor(data.rates.VND.rate_for_amount));
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, [date, userInfo?._id]);

  const exchangeList = {
    setDate,
    rate,
  };
  return (
    <ExchangeContext.Provider value={exchangeList}>
      {children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;
