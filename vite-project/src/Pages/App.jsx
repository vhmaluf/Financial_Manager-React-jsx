import { useState } from "react";
import "../CSS/App.css";
import AddValues from "../Components/AddValues.jsx";
import ShowValues from "../Components/ShowValues.jsx";

function App() {
  const [values, setValues] = useState([
    { id: 1, origin: "Salary", value: 5000, spend: false },
    { id: 2, origin: "Freelance", value: 2000, spend: false },
    { id: 3, origin: "Supermarket", value: 1000, spend: true },
  ]);

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Financial Manager</h1>
        <AddValues />
        <ShowValues values={values} />
      </div>
    </div>
  );
}

export default App;
