import { useState, useEffect } from "react";
import "../CSS/App.css";
import Incomes from "../Components/Incomes.jsx";
import Expenses from "../Components/Expenses.jsx";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("item")) || [],
  );

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("selected")) || "income",
  );

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  function onChangeSelectedClick(selected) {
    var newSelected;
    if (selected === "income") {
      newSelected = "income";
    } else {
      newSelected = "expense";
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
            onClick={() => onChangeSelectedClick("income")}
            className={`button-page ${selected === "income" ? "selected" : ""}`}
            id="first-button"
          >
            Income
          </button>
          <button
            onClick={() => onChangeSelectedClick("expense")}
            className={`button-page ${selected === "expense" ? "selected" : ""}`}
          >
            Expense
          </button>
        </div>
        {selected === "income" ? (
          <Incomes
            items={items}
            onAddValueClick={onAddValueClick}
            onDeleteValueClick={onDeleteValueClick}
          />
        ) : (
          <Expenses
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
