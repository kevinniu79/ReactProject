import React from "react";
import ExpenseItem from "./Components/ExpenseItem";

function App() {

const expenses = [
{
  id: 'e1', 
  title: 'Toilet Paper', 
  amount: 94.12,
  date: new Date(2020, 7, 13),

},
{
  id: 'e2', 
  title: 'New TV', 
  amount: 799.42,
  date: new Date(2021, 8, 12),

}, 
{
  id: 'e3', 
  title: 'Car Insurance', 
  amount: 294.39,
  date: new Date(2021, 2, 28),
},
{
  id: 'e4', 
  title: 'New Desk', 
  amount: 450,
  date: new Date(2021, 5, 12),
}

]

  return (
    <div>
      <h2>Let's get started!</h2>
  
      <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}

      ></ExpenseItem>
      <ExpenseItem
       title={expenses[1].title}
       amount={expenses[1].amount}
       date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
       title={expenses[2].title}
       amount={expenses[2].amount}
       date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
       title={expenses[3].title}
       amount={expenses[3].amount}
       date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
