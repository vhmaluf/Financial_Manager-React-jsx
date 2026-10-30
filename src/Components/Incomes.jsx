import AddIncomes from "./AddIncomes.jsx";
import ShowIncomes from "./ShowIncomes.jsx";

function Incomes(props) {
  return (
    <>
      <AddIncomes onAddValueClick={props.onAddValueClick} />
      <ShowIncomes
        items={props.items}
        onDeleteValueClick={props.onDeleteValueClick}
      />
    </>
  );
}

export default Incomes;
