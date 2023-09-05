import React, { useState } from "react";
import { validateString } from "./utils/validation";
import "./App.css";

function App() {
  const [str, setStr] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleValidate = () => {
    const result = validateString(str, maxLength);
    setIsValid(result);
  };

  return (
    <div className="App">
      <h1>String Validator</h1>
      <div className="form-group">
        <label htmlFor="string">String:</label>
        <input
          type="text"
          id="string"
          value={str}
          onChange={(e) => setStr(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="maxLength">Max Length:</label>
        <input
          type="number"
          id="maxLength"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
        />
      </div>
      <button onClick={handleValidate}>Validate</button>
      {isValid !== null && (
        <div className={isValid ? "valid" : "invalid"}>
          {isValid ? "Valid String" : "Invalid String"}
        </div>
      )}
    </div>
  );
}

export default App;
