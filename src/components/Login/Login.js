import React from "react";
// import { useNavigate } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./Login.styles";

const Login = () => {
  const handleInput = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Content>
        <label htmlFor="email">Email:</label>
        <input type="email" value="state" name="email" onChange={handleInput} />
      </Content>
      <Content>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value="state"
          name="password"
          onChange={handleInput}
        />
      </Content>
      <button>Login</button>
    </Wrapper>
  );
};

export default Login;
