import React from "react";
import Expenses from "./Components/Expenses.js";
import NewExpense from "./Components/newExpense/NewExpense.js";

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
    <NewExpense></NewExpense>
    <Expenses items={expenses}></Expenses>
   </div>
  );
}

export default App;
