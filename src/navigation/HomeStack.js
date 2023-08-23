import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import actions from "../actions";
import colors from "../assets/styles/colors";
import imagePath from "../constants/imagePath";
import Home from "../pages/Home/Home";
import WriteTodo from "../pages/WriteTodo/WriteTodo";

const Navbar = ({ authenticated }) => {
  const [array, setArray] = useState([
    { name: "To-Do", screenName: "/" },
    { name: "Upload To-do" ,screenName:'/Write/Todo' },
    { name: "LogOut", screenName: "/" },
  ]);

  const [selectScreen, setSelectScreen] = useState("To-Do");
  const onPressScreen = (item) => {
    if (item.name == "LogOut") {
      actions.userDate({});
    }
    setSelectScreen(item?.name);
  };
  return (
    <div
      style={{
        // backgroundColor: colors.grey,
        background: `linear-gradient(to  right, ${colors.theamColor}, ${colors.purplelight}`,
        flexDirection: "row",
        display: "flex",
        paddingLeft: 20,
        paddingRight: 10,
        padding:10
      }}
    >
      <div style={{ display: "flex", flex: 0.2, }}>
        <img
          src={imagePath.logo}
          alt="My Image"
          style={{ height: 60, width: 60 ,resize:'block'}}
      
        />
      </div>
      <div
        style={{
          display: "flex",

          flex: 0.8,
          justifyContent: "flex-end",
          color: "white",

          alignItems:'center'
        }}
      >
        {array.map((item, index) => {
          if (item.screenName == "LogOut") {
            return (
              <h6
                className={
                  item.screenName === selectScreen
                    ? "selectedScreen"
                    : "unSelectedScreen"
                }
                onClick={() => onPressScreen(item)}
              >
                {item.name}
              </h6>
            );
          }
          return (
            <Link
              to={item.screenName}
              key={index}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h6
                className={
                  item.name === selectScreen
                    ? "selectedScreen"
                    : "unSelectedScreen"
                }
                onClick={() => onPressScreen(item)}
              >
                {item.name}
              </h6>
            
            </Link>
          );
        })}
      </div>
    </div>
  );
};

function HomeStack() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write/Todo" element={<WriteTodo />} />
      </Routes>
    </div>
  );
}

export default HomeStack;
