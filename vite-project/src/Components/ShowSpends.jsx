import "../CSS/Values.css";

function ShowSpends(props) {
  return (
    <div className="box">
      <h2 className="title-values">Spends</h2>
      <ul className="list">
        {props.values.map(
          (value) =>
            value.type === "spend" && (
              <li key={value.id} className="list-item">
                <p className="item-text" id="first-item">
                  {value.origin}
                </p>
                <p className="item-text">${value.value}</p>
              </li>
            ),
        )}
      </ul>
    </div>
  );
}

export default ShowSpends;
