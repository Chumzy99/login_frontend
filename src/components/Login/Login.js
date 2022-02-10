import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { login, render } from "../../helper";

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

const Login = ({ closeModal }) => {
  const [email, setEmail] = useState(mailData || "");
  const [password, setPassword] = useState(passData || "");
  const [response, setResponse] = useState({});

  if (closeModal) {
    // console.log(closeModal());
    // setResponse({});
  }

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

    setResponse(await login(reqBody));
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
    </div>
  );
};

export default Login;
