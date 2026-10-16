import "../CSS/Values.css";

function ShowValues(props) {
  return (
    <div className="add-values">
      <h2 className="title-values">Earns</h2>
      <ul>
        {props.values.map(
          (value) =>
            !value.spend && (
              <li key={value.id}>
                <strong>Origin:</strong> {value.origin} |{" "}
                <strong>Value:</strong> {value.value}
              </li>
            ),
        )}
      </ul>
    </div>
  );
}

export default ShowValues;
