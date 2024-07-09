// src/components/ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ expense, removeExpense }) => {
  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <div>
            <h6 className="mb-1">{expense.description}</h6>
            <small className="text-muted">${expense.amount.toFixed(2)}</small>
        </div>
        <button className="btn btn-outline-danger btn-sm" onClick={() => removeExpense(expense.id)}>Remove</button>
    </div>
  );
};

export default ExpenseItem;
