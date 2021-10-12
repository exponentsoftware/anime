import React, { useState } from "react";

import LoginUI from "./LoginUI";


import { Alert } from "@chakra-ui/alert";

function Login() {

  const [login, setLogin] = useState({ username:"", password:"" });
 



  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = login;

    if (username === "" || password === "") {
      alert("All Field are required");
    } else {
      username === "username" || password === "password"
        ? Alert('Hello userName')
        : alert("invalid user");
    }
  };
  return <LoginUI handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default Login;