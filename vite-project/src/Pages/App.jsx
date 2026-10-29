import { useState } from "react";
import "../CSS/App.css";
import Earns from "../Components/Earns.jsx";
import Spends from "../Components/Spends.jsx";

function App() {
  const [values, setValues] = useState([
    { id: 1, origin: "Salary", value: 5000, type: "earn" },
    { id: 2, origin: "Freelance", value: 2000, type: "earn" },
    { id: 3, origin: "Supermarket", value: 1000, type: "spend" },
  ]);
  const [selected, setSelected] = useState("earn");

  function onChangeSelectedClick(selected) {
    var newSelected;
    if (selected === "earn") {
      newSelected = "earn";
    } else {
      newSelected = "spend";
    }
    setSelected(newSelected);
  }

  function onAddValueClick(origin, value, type) {
    const addValue = {
      id: values.length > 0 ? values[values.length - 1].id + 1 : 1,
      origin: origin,
      value: value,
      type: type,
    };
    setValues([...values, addValue]);
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Financial Manager</h1>
        <div className="button-container">
          <button
            onClick={() => onChangeSelectedClick("earn")}
            className={`button-page ${selected === "earn" ? "selected" : ""}`}
            id="first-button"
          >
            Earn
          </button>
          <button
            onClick={() => onChangeSelectedClick("spend")}
            className={`button-page ${selected === "spend" ? "selected" : ""}`}
          >
            Spend
          </button>
        </div>
        {selected === "earn" ? (
          <Earns values={values} onAddValueClick={onAddValueClick} />
        ) : (
          <Spends values={values} onAddValueClick={onAddValueClick} />
        )}
      </div>
    </div>
  );
}

export default App;
