import { FaCheck, FaTimes } from "react-icons/fa";

let body = {};

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = async (reqBody) => {
  body = reqBody;
  const endpoint = `http://127.0.0.1:4000/api/v1/auth/login`;

  const response = await fetch(endpoint, {
    ...defaultConfig,
    body: JSON.stringify({ ...reqBody }),
  });

  const result = await response.json();

  return result;
};

export const render = (renderMessage, res) => {
  if (renderMessage && res.status === "success") {
    sessionStorage.setItem("email", body.email);
    sessionStorage.setItem("password", body.password);
    return (
      <div className="modal">
        <FaCheck className="check" />
        <h2>Successful</h2>
      </div>
    );
  } else if (renderMessage && res.status === "fail") {
    return (
      <div className="modal">
        <FaTimes className="check fail" />
        <h2 className="failT">{"fail"}</h2>
      </div>
    );
  }
};
