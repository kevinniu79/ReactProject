import React, { useState } from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card.js';
import ExpensesFilter from "./newExpense/ExpensesFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    });

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}
            ></ExpensesFilter>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
}

export default Expenses;