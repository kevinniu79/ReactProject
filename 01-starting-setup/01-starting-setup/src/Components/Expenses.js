import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card.js";
import ExpensesFilter from "./newExpense/ExpensesFilter";


function Expenses(props){

const [filteredYear, setFilteredYear] = useState("2020"); 


function filterChangeHolder(selectedYear){
 setFilteredYear(selectedYear); 
}

    return(
        <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHolder}></ExpensesFilter>
    {props.items.map((expensesElement) => (
        <ExpenseItem
          title={expensesElement.title}
          amount={expensesElement.amount}
          date={expensesElement.date}
        ></ExpenseItem>
      ))}
      </Card>
    );
}

export default Expenses; 