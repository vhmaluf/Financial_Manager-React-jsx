import "../CSS/Values.css";
import { useState } from "react";

function AddSpends() {
  const [origin, setOrigin] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="box">
      <h2 className="title-add">Add Spends</h2>
      <input
        type="text"
        placeholder="Spend Origin"
        id="add-origin"
        className="input-field"
      ></input>
      <input
        type="text"
        placeholder="Spend Value"
        id="add-value"
        className="input-field"
      />
      <button className="button-add">Add value</button>
    </div>
  );
}

export default AddSpends;
