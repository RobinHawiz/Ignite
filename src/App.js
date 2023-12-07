import { useEffect } from "react";
import { popularGamesURL } from "./api";
//Components and pages
import Home from "./pages/Home";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game/:id" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
