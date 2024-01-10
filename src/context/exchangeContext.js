import { format } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export const ExchangeContext = createContext(null);

const ExchangeProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext)

 const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"))

 const [baseCurrency, setBaseCurrency] = useState('VND');

 const [exchangeCurrency, setExchangeCurrency] = useState(baseCurrency === "VND" ? "USD" : "VND");

 const [rate, setRate] = useState();

 useEffect(() => {
   if (userInfo) {
    setBaseCurrency(userInfo ? userInfo.baseCurrency : 'VND');
    setExchangeCurrency(userInfo.baseCurrency === "VND" ? "USD" : "VND")
  }
    const key = "dd9772cb61ace78c3427e95aae9423c000789e77";
    const apiUrl = `https://api.getgeoapi.com/v2/currency/historical/${date}?api_key=${key}&from=${exchangeCurrency}&to=${baseCurrency}&amount=1&format=json`;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      if (baseCurrency === "VND") {
        setRate(Math.floor(data.rates.VND.rate_for_amount));
      } else {
        setRate(data.rates.USD.rate_for_amount);
      }
    })
    .catch((error) => console.error('Error fetching exchange rates:', error));
 }, [baseCurrency, exchangeCurrency, date, userInfo])

 const exchangeList = {
   setDate,
   setBaseCurrency,
   setExchangeCurrency,
   rate
 }

  return (
    <ExchangeContext.Provider value={exchangeList}>
      {children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;
