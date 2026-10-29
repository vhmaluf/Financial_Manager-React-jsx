import { useState, useEffect } from "react";
import "../CSS/App.css";
import Earns from "../Components/Earns.jsx";
import Spends from "../Components/Spends.jsx";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("item")) || [],
  );

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("selected")) || "earn",
  );

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

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
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      origin: origin,
      value: value,
      type: type,
    };
    setItems([...items, addValue]);
  }

  function onDeleteValueClick(itemId) {
    const updatedItems = items.filter((item) => item.id != itemId);
    setItems(updatedItems);
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
          <Earns
            items={items}
            onAddValueClick={onAddValueClick}
            onDeleteValueClick={onDeleteValueClick}
          />
        ) : (
          <Spends
            items={items}
            onAddValueClick={onAddValueClick}
            onDeleteValueClick={onDeleteValueClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
