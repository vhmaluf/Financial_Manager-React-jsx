import AddExpenses from "./AddExpenses.jsx";
import ShowExpenses from "./ShowExpenses.jsx";

function Expenses(props) {
  return (
    <>
      <AddExpenses onAddValueClick={props.onAddValueClick} />
      <ShowExpenses
        items={props.items}
        onDeleteValueClick={props.onDeleteValueClick}
      />
    </>
  );
}

export default Expenses;
