import "../CSS/Values.css";
import { useState } from "react";

function AddEarns(props) {
  const [origin, setOrigin] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="box">
      <h2 className="title-add">Add Earns</h2>
      <input
        type="text"
        placeholder="Earn Origin"
        id="add-origin"
        className="input-field"
        onChange={(e) => setOrigin(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Earn Value"
        id="add-value"
        className="input-field"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="button-add"
        onClick={() => {
          if (!origin.trim() || !value.trim()) {
            return alert("Please fill in all fields.");
          }
          if (isNaN(value)) {
            return alert("Please enter a valid number for the value.");
          }
          props.onAddValueClick(origin, value, "earn");
          setOrigin("");
          document.getElementById("add-origin").value = "";
          setValue("");
          document.getElementById("add-value").value = "";
        }}
      >
        Add value
      </button>
    </div>
  );
}

export default AddEarns;
