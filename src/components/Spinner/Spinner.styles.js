import styled from "styled-components";

export const Spinner = styled.div`
  border: 0.5rem solid #25d366;
  border-top: 0.5rem solid white;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  position: absolute;
  top: 20rem;
  left: 67rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
