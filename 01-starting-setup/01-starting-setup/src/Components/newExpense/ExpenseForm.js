import React, {useState} from "react";
import './ExpenseForm.css'; 


function ExpenseForm(){

const [enteredTitle, setEnteredTitle] = useState(""); 
const [enterAmount, setEnterAmount] = useState(""); 
const [enterDate, setEnterDate] = useState(""); 

function titleChangeHandler(event){
    setEnteredTitle(event.target.value); 
}

function amountChangeHandler(event){
    setEnterAmount(event.target.value); 
}

function dateChangeHandler(event){
    setEnterDate(event.target.value); 
}

function submitHandler(event){
event.preventDefault(); 
const expenseData = {
    title: enteredTitle, 
    amount: enterAmount,
    date: new Date(enterDate),
}
console.log(expenseData);
setEnterAmount(""); 
setEnterDate(""); 
setEnteredTitle(""); 
}

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value = {enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enterAmount} onChange ={amountChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enterDate} onChange={dateChangeHandler}></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
        </form>
    )
}

export default ExpenseForm;  