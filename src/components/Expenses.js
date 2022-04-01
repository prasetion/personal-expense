import React from "react";
import ExpenseItem from "./ExpenseItem";
const Expenses = ({ expenses }) => {
  return (
    <div>
      <ExpenseItem props={expenses[0]}></ExpenseItem>
      <ExpenseItem props={expenses[1]}></ExpenseItem>
      <ExpenseItem props={expenses[2]}></ExpenseItem>
      <ExpenseItem props={expenses[3]}></ExpenseItem>
    </div>
  );
};

export default Expenses;
