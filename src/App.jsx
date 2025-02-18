import React from "react";
import FloatingHearts from "./components/Snowflakes/Snowflakes";
import Garland from "./components/Garland/Garland";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons";
import Ticker from "./components/Ticker/Ticker";
import CopyButtons from "./components/CopyButtons/CopyButtons";
import CopyButtons2 from "./components/CopyButtons/CopyButtons2";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <FloatingHearts />
      <Garland />
      <center>
        <NavigationButtons />
      </center>
      <Ticker />
      <div id="parent">
        <div id="left">
          <CopyButtons />
        </div>
        <div id="right">
          <CopyButtons2 />
        </div>
      </div>
    </div>
  );
};

export default App;
