import React, { useEffect, useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const [operator, setOperator] = useState("");

  useEffect(() => {
    const displayValue = document.querySelector(".stored-value");
    const displayInput = document.querySelector(".input-value");
    
    if (storedValue) {
      displayValue.scrollLeft = displayValue.scrollWidth;
    }
    if (inputValue) {
      displayInput.scrollLeft = displayInput.scrollWidth;
    }
  }, [inputValue, storedValue]);

  const handleClear = (e) => {
    if (e.target.value === "C") {
      if (inputValue !== "")
        setInputValue(inputValue.slice(0, inputValue.length - 1));
      if (inputValue === "" && storedValue !== "") {
        setStoredValue("");
        setOperator("");
        setInputValue(storedValue.slice(0, storedValue.length - 1));
      }
    } else {
      setInputValue("");
      setStoredValue("");
      setOperator("");
    }
  };

  const calculateAnswer = () => {
    if (storedValue && inputValue) {
      const num1 = parseFloat(storedValue);
      const num2 = parseFloat(inputValue);
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "x":
          return num1 * num2;
        case "/":
          return num1 / num2;
        default:
          return 0;
      }
    }
  };

  const handleNumberClick = (e) => {
    setInputValue(inputValue + e.target.value);
  };

  const handleOperatorClick = (e) => {
    if (inputValue !== "" && e.target.value === "+/-") {
      setInputValue(
        inputValue.charAt(0) === "-" ? inputValue.slice(1) : `-${inputValue}`
      );
    }
    if (inputValue !== "" && e.target.value !== "+/-") {
      setOperator(e.target.value);
      setInputValue("");
      if (storedValue && inputValue) {
        const result = calculateAnswer();
        setStoredValue(result.toString() + e.target.value);
      } else {
        setStoredValue(inputValue + e.target.value);
      }
    }
  };

  const handleEqualClick = () => {
    if (storedValue && inputValue) {
      const result = calculateAnswer();
      setInputValue(result.toString());
      setStoredValue("");
      setOperator("");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className="stored-value">{storedValue}</div>
          <div className="input-value">{inputValue}</div>
        </div>
        <div className="calculator-buttons">
          <input
            type="button"
            value="C"
            className="input-btn C"
            onClick={handleClear}
          />
          <input
            type="button"
            value="AC"
            className="input-btn AC"
            onClick={handleClear}
          />
          <input
            type="button"
            value="+/-"
            className="input-btn"
            onClick={handleOperatorClick}
          />
          <input
            type="button"
            value="x"
            className="input-btn"
            onClick={handleOperatorClick}
          />

          <input
            type="button"
            value="7"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="8"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="9"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="/"
            className="input-btn"
            onClick={handleOperatorClick}
          />

          <input
            type="button"
            value="4"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="5"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="6"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="-"
            className="input-btn"
            onClick={handleOperatorClick}
          />
          <input
            type="button"
            value="1"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="2"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="3"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="+"
            className="input-btn plus"
            onClick={handleOperatorClick}
          />
          <input
            type="button"
            value="."
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="0"
            className="input-btn"
            onClick={handleNumberClick}
          />
          <input
            type="button"
            value="="
            className="input-btn equal"
            onClick={handleEqualClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
