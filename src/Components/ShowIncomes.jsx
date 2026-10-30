import "../CSS/Values.css";
import { Trash } from "lucide-react";

function ShowIncomes(props) {
  return (
    <div className="box">
      <h2 className="title-values">Incomes</h2>
      <ul className="list">
        {props.items.map(
          (value) =>
            value.type == "income" && (
              <li key={value.id} className="list-item">
                <p className="item-text" id="first-item">
                  {value.origin}
                </p>
                <p className="item-text" id="second-item">
                  ${value.value}
                </p>
                <button
                  className="item-icon"
                  onClick={() => props.onDeleteValueClick(value.id)}
                >
                  <Trash size={18} />
                </button>
              </li>
            ),
        )}
      </ul>
    </div>
  );
}

export default ShowIncomes;
