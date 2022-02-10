import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #25d366;
  width: 60rem;
  height: 40rem;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);

  button {
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.8rem;
    border: none;
  }

  button:hover,
  button:active {
    color: #25d366;
  }

  .modal {
    background-color: white;
    padding: 3rem;
    color: #25d366;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  .check {
    font-size: 15rem;
  }

  .failT,
  .fail {
    color: red;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;

  label {
    font-size: 1.5rem;
  }

  input {
    padding: 1rem;
    border-radius: 0.7rem;
    border: none;
    text-decoration: none;
  }
`;

export const Response = styled.div`
  /* background-color: blue;
  position: absolute;
  top: 20rem;
  height: 70vh;
  width: 43vw;
  .check {
    font-size: 12rem;
    color: red;
  } */
`;
