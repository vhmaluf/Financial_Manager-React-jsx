import AddSpends from "./AddSpends.jsx";
import ShowSpends from "./ShowSpends.jsx";

function Spends(props) {
  return (
    <>
      <AddSpends onAddValueClick={props.onAddValueClick} />
      <ShowSpends
        items={props.items}
        onDeleteValueClick={props.onDeleteValueClick}
      />
    </>
  );
}

export default Spends;
