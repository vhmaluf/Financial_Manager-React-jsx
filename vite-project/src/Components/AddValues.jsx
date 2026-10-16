import "../CSS/Values.css";
import { useState } from "react";

function AddValues() {
  const [origin, setOrigin] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="add-values">
      <input
        type="text"
        placeholder="Earn Origin"
        id="add-origin"
        className="input-field"
      ></input>
      <input
        type="text"
        placeholder="Earn Value"
        id="add-value"
        className="input-field"
      />
      <button className="button-add">Add value</button>
    </div>
  );
}

export default AddValues;
