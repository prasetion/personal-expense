import React from "react";
import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem props={expenses[0]}></ExpenseItem>
      <ExpenseItem props={expenses[1]}></ExpenseItem>
      <ExpenseItem props={expenses[2]}></ExpenseItem>
      <ExpenseItem props={expenses[3]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
