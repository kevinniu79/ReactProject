import React, { useState } from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card.js';
import ExpensesFilter from "./newExpense/ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {props.items.map((expensesElement) => (
                <ExpenseItem
                key={expensesElement.id}
                    title={expensesElement.title}
                    amount={expensesElement.amount}
                    date={expensesElement.date}
                ></ExpenseItem>
            ))}
        </Card>
    );

}

export default Expenses;