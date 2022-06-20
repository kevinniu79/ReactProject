import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem.js';
import Card from './Card.js';
import ExpensesFilter from './newExpense/ExpensesFilter.js';

function Expenses(props) {
    const [filteredYear, setFilteredYear]=useState('2020');
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {props.items.map((expensesElement) => (
                <ExpenseItem title={expensesElement.title} amount={expensesElement.amount} date={expensesElement.date}></ExpenseItem>
      ))}

        </Card>
    );
}
export default Expenses;