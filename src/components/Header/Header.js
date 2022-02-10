import React, { useState } from "react";
import { Wrapper, Content, IconDiv } from "../Header/Header.styles";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Wrapper>
      <a href="http://localhost:3000">
        <img
          src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?size=338&ext=jpg"
          alt="yes"
        />
      </a>
      <h1>Please Login To Gain Access</h1>
      <Content>
        <IconDiv>
          <FaBars
            className={`icons ${toggle ? "close" : ""}`}
            onClick={handleToggle}
          />
          <FaTimes
            className={`icons ${toggle ? "" : "close"}`}
            onClick={handleToggle}
          />
        </IconDiv>
        <ul className={toggle ? "" : "close"}>
          <li>
            <a href="http://localhost:3000">Register</a>
          </li>
          <li>
            <a href="http://localhost:3000">About Us</a>
          </li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Header;
