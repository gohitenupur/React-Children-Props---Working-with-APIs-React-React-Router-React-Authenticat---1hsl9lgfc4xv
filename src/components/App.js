import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(inputValue ? inputValue * inputValue : "");
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="main">
      <ChildComponent />
      <input
        id="input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p id="output">{output}</p>
    </div>
  );
};

export default App;
