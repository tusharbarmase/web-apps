import React from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className="stored-value">8</div>
          <div className="input-value">888</div>
        </div>
        <div className="calculator-buttons">
          <input type="button" value="C" className="input-btn C" />
          <input type="button" value="AC" className="input-btn AC" />
          <input type="button" value="&radic;" className="input-btn" />
          <input type="button" value="*" className="input-btn" />

          <input type="button" value="7" className="input-btn" />
          <input type="button" value="8" className="input-btn" />
          <input type="button" value="9" className="input-btn" />
          <input type="button" value="/" className="input-btn" />

          <input type="button" value="4" className="input-btn" />
          <input type="button" value="5" className="input-btn" />
          <input type="button" value="6" className="input-btn" />
          <input type="button" value="-" className="input-btn" />

          <input type="button" value="1" className="input-btn" />
          <input type="button" value="2" className="input-btn" />
          <input type="button" value="3" className="input-btn" />
          <input type="button" value="+" className="input-btn plus" />

          <input type="button" value="." className="input-btn" />
          <input type="button" value="0" className="input-btn" />
          <input type="button" value="=" className="input-btn equal" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
