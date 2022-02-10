import "./App.styles.js";
import { Wrapper } from "./App.styles.js";

// Components
import Login from "./components/Login/Login";
import Header from "./components/Header/Header.js";

import { GlobalStyle } from "./GlobalStyle.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Login />
      </Wrapper>
      <GlobalStyle />
    </div>
  );
}

export default App;
