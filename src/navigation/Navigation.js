import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { isEmpty } from "lodash";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

function Navigation() {
  const userData = useSelector((state) => state?.auth?.userData);
console.log(userData,'authenticatedauthenticated');
  return (
    <Router>
    <Routes>
        {!!userData?.token ? (
           <Route path="*" element={<HomeStack />} />
  
      ) : (
        <Route path="*" element={<AuthStack />} />
      )}
    </Routes>
  </Router>
  );
}

export default Navigation;
