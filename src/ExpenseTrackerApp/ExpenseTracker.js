
import React, { useState } from 'react';
import Navbar from './Navbar';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseTracker= () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const removeExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row g-4">
                <div className="col-md-4">
                    <ExpenseForm addExpense={addExpense} />
                </div>
                <div className="col-md-8">
                    <ExpenseList expenses={expenses} removeExpense={removeExpense} />
                </div>
                </div>
        </div>
        </div>
    );
};

export default ExpenseTracker;
