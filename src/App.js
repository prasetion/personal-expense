import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      title: "ini title",
      date: new Date(),
      amount: "price",
    },
    {
      title: "ini title",
      date: new Date(),
      amount: "price",
    },
    {
      title: "ini title",
      date: new Date(),
      amount: "price",
    },
    {
      title: "ini title",
      date: new Date(),
      amount: "price",
    },
  ];

  return (
    <div>
      <h2>Let started</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
