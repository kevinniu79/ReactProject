import React from 'react';
import "./ExpenseItem.css";
function ExpenseItem(){
    return(

        <div className = 'expense-item'>
            <div>june 10 2022</div>
            <div className = 'expense-item__description'>
                <h2> car insurance</h2>
                <div className='expense-item__price'>$3</div>
            </div>
        </div>
    )
}
export default ExpenseItem;