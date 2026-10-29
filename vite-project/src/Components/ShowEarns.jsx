import "../CSS/Values.css";

function ShowEarns(props) {
  return (
    <div className="box">
      <h2 className="title-values">Earns</h2>
      <ul className="list">
        {props.values.map(
          (value) =>
            !value.spend && (
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

export default ShowEarns;
