import React, {useState} from 'react';
import Expenses from './components/Expenses.js';
import NewExpense from './components/newExpense/NewExpense.js';
function App() {
  
  const[expenses, setExpenses]=useState(InitialExpenses);
  const InitialExpenses = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,14),
    },
    {
      id:'e2',
      title:'New TV',
      amount:799.49,
      date: new Date(2021,2,12),
    },
    {
      id:'e3',
      title:'Car Insurance',
      amount:'233.14',
      date: new Date(2021,2,28),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021,5,12)
    }
  ]

  function addExpenseHandler(expense){
    setExpenses((prevExpenses) => {
      return[...prevExpenses, expense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
