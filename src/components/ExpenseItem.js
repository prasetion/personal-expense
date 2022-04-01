import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseData = new Date(2022, 15, 7);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 1231;

  return (
    <div className="expense-item">
      <div>{expenseData.toISOString()}</div>
      <div className="expense-item__description">
        <h2>nama</h2>
        <div className="expense-item__price">harga</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
