import React, { Fragment, useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


import { publicRoutes, privateRoutes } from "./routes/routes";
import Error from './pages/public/Error';
import { AuthContext } from "./context/authContext";

function App() {
  // Authenticate user for private routes
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <Router>
      <div className="App">
        <Routes>
          {/*Create public routes */}
          {publicRoutes.map((route, index) => {
            /*Set up routes for public pages */

            const Page = route.component;
            const Layout = route.layout === null ? Fragment : route.layout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  !userInfo ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to='/dashboard' replace />
                  )
                }
              ></Route>
            );
          })}
          {/*Create private routes */}
          {privateRoutes.map((route, index) => {
            // {
            //   /*Set up routes for public pages */
            // }
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
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
