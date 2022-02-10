import React, { useState } from "react";
import "./App.styles.js";
import { Wrapper } from "./App.styles.js";

// Components
import Login from "./components/Login/Login";
import Header from "./components/Header/Header.js";

import { GlobalStyle } from "./GlobalStyle.js";

function App() {
  const [modal, setmodal] = useState({});

  const hanldleCloseModal = (e) => {
    // setmodal({});
  };

  return (
    <div className="App" onClick={hanldleCloseModal}>
      <Header />
      <Wrapper>
        <Login closeModal={modal} />
      </Wrapper>
      <GlobalStyle />
    </div>
  );
}

export default App;
