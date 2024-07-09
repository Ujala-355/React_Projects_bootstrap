import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount)
        };
        addExpense(newExpense);
        setDescription('');
        setAmount('');
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Add Expense</h5>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Expense</button>
                </form>
            </div>
        </div>
    );
};

export default ExpenseForm;
