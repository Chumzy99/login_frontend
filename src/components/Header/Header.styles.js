import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 10rem;
  background-color: black;
  color: white;
  padding: 1rem;
  /* position: relative; */

  img {
    height: 8rem;
    border-radius: 1rem;
  }

  h1 {
    justify-self: flex-end;
  }
`;

export const Content = styled.nav`
  font-size: 1rem;
  animation: all 9s;
  position: relative;

  .icons {
    font-size: 5rem;
    position: absolute;
    top: -2rem;
    right: 2rem;
    stroke: red;
    cursor: pointer;
  }

  .icons:hover,
  .icons:active {
    stroke: #555;
  }

  .close {
    opacity: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 5rem;
    right: 0rem;
    background-color: black;
    padding: 2rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  ul li {
    list-style: none;
    font-size: 1.5rem;
    color: white;
  }
  ul li a {
    text-decoration: none;
    color: white;
  }

  ul li a:hover,
  ul li a:active {
    color: #888;
  }
`;

export const IconDiv = styled.div`
  /* background-color: red; */
`;
