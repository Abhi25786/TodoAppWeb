import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { userDate } from "./actions/auth";
import Navigation from "./navigation/Navigation";
import store from "./store/configureStore";
import { getItem } from "./utils/utils";

function App() {

  useEffect(() => {
    let userData = getItem('userData')
      if (userData != undefined) {
          userDate(userData);
        }
  }, []);

  return (
    <Provider store={store}>
        <Navigation />
    </Provider>

  )

}

export default App;
