import React, { Fragment, useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./pages/public/LandingPage";
import Transaction from "./pages/private/Transaction";
import Bills from "./pages/private/Bills";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import Category from "./pages/private/Category";
import Wallet from "./pages/private/Wallet";
import Dashboard from "./pages/private/Dashboard";
import Saving from "./pages/private/Saving";
import StatisticPage from "./pages/private/Statistic";

import { publicRoutes, privateRoutes } from "./routes/routes";
import { AuthContext } from "./context/authContext";

function App() {
  // Authenticate user for private routes
  const { userInfo } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Routes>
          {/*Create public routes */}
          {publicRoutes.map((route, index) => {
            {
              /*Set up routes for public pages */
            }
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : route.layout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
          {/*Create private routes */}
          {privateRoutes.map((route, index) => {
            {
              /*Set up routes for public pages */
            }
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : route.layout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  userInfo ? (
                    <Layout header={route.header} username={userInfo.username}>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
    // <Routes>
    //   <Route path="/" element={<LandingPage />}></Route>
    //   <Route path="/transaction" element={<Transaction />}></Route>
    //   <Route path="/transaction/:id" element={<Transaction />}></Route>
    //   <Route path="/invoices" element={<Bills />}></Route>
    //   <Route path="/login" element={<Login />}></Route>
    //   <Route path="/wallets" element={<Wallet />}></Route>
    //   <Route path="/dashboard" element={<Dashboard/>}></Route>
    //   <Route path="/statistics" element={<StatisticPage/>}></Route>
    //   <Route path="/planning" element={<Saving/>}></Route>

    //   {/* <Route path="/login" element={<Login />}></Route> */}
    //   <Route path="/signup" element={<Signup />}></Route>
    //   <Route path="/category" element={<Category />}></Route>
    // </Routes>
  );
}

export default App;
