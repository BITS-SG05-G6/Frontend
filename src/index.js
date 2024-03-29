import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/authContext";
import CategoryProvider from "./context/categoryContext";
import WalletProvider from "./context/walletContext";
import TransactionProvider from "./context/transactionContext";
import BillProvider from "./context/billContext";
import SavingProvider from "./context/savingContext";
import ExchangeProvider from "./context/exchangeContext";
import NotificationProvider from "./context/notificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <AuthProvider>
        <ExchangeProvider>
          <TransactionProvider>
            <CategoryProvider>
              <WalletProvider>
                <BillProvider>
                  <SavingProvider>
                    <App />
                  </SavingProvider>
                </BillProvider>
              </WalletProvider>
            </CategoryProvider>
          </TransactionProvider>
        </ExchangeProvider>
      </AuthProvider>
    </NotificationProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
