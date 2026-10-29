import AddEarns from "./AddEarns.jsx";
import ShowEarns from "./ShowEarns.jsx";

function Earns(props) {
  return (
    <>
      <AddEarns />
      <ShowEarns values={props.values} />
    </>
  );
}

export default Earns;
