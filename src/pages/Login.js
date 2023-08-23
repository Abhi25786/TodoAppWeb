import React, { useState } from "react";
import actions from "../actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    let data = {
      email: email,
      password: password,
    };

    await actions
      .userLogin(data, { "Content-Type": "application/json" })
      .then((res) => {
        console.log(res, "resresresresres");
        if (!!res?.success) {
          actions.userDate(res?.data);
          alert(res.message);
          return;
        }
        alert(res.message);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error, "resresresresres");
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
