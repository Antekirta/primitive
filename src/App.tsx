import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LocalArea from "./components/LocalArea/LocalArea";

const App: React.FC = () => {
  return (
    <div className="app">
      <LocalArea />
    </div>
  );
};

export default App;
