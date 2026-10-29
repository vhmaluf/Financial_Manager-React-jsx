import AddEarns from "./AddEarns.jsx";
import ShowEarns from "./ShowEarns.jsx";

function Earns(props) {
  return (
    <>
      <AddEarns onAddValueClick={props.onAddValueClick} />
      <ShowEarns
        items={props.items}
        onDeleteValueClick={props.onDeleteValueClick}
      />
    </>
  );
}

export default Earns;
