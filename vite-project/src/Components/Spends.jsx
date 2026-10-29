import AddSpends from "./AddSpends.jsx";
import ShowSpends from "./ShowSpends.jsx";

function Spends(props) {
  return (
    <>
      <AddSpends onAddValueClick={props.onAddValueClick} />
      <ShowSpends values={props.values} />
    </>
  );
}

export default Spends;
