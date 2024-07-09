import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, removeExpense }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Expenses</h5>
                <div className="list-group">
                {expenses.length === 0 ? (
                    <div className="alert alert-warning" role="alert">
                    No expenses added yet.
                    </div>
                ) : (
                    expenses.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense} removeExpense={removeExpense} />
                    ))
                )}
                </div>
            </div>
        </div>
    );
};

export default ExpenseList;
