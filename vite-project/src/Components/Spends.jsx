import AddSpends from "./AddSpends.jsx";
import ShowSpends from "./ShowSpends.jsx";

function Spends(props) {
  return (
    <>
      <AddSpends />
      <ShowSpends values={props.values} />
    </>
  );
}

export default Spends;
