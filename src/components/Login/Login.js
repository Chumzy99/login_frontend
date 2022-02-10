import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { login, render } from "../../helper";
import Spinner from "../Spinner/Spinner";

// Styles
import { Wrapper, Content } from "./Login.styles";
let mailData = "";
let passData = "";

if (sessionStorage.getItem("email")) {
  mailData = sessionStorage.getItem("email");
}

if (sessionStorage.getItem("password")) {
  passData = sessionStorage.getItem("password");
}

const Login = () => {
  const [email, setEmail] = useState(mailData || "");

  const [password, setPassword] = useState(passData || "");
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      email,
      password,
    };

    setLoader(true);
    setResponse(await login(reqBody));
    setLoader(false);
  };

  let renderMessage = response.status ? true : false;

  return (
    <div>
      <Wrapper onSubmit={handleSubmit}>
        <Content>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="example@gmail.com"
            onChange={handleInput}
            required
          />
        </Content>
        <Content>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleInput}
            required
          />
        </Content>
        <button>Login</button>
        {render(renderMessage, response)}
      </Wrapper>
      {loader && <Spinner />}
    </div>
  );
};

export default Login;
