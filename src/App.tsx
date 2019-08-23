import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import LocalArea from "./components/LocalArea/LocalArea";
import { startTimer } from "./utils/timer";

startTimer();

const App: React.FC = () => {
  return (
    <div className="app">
      <LocalArea />
    </div>
  );
};

export default App;
