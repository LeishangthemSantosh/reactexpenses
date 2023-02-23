import React from 'react'
import { ExpenseItem } from './ExpenseItem';
import "./ExpensesList.css"

export const ExpensesList = (props) => {
    // let expneseContent = <p>No expense found</p>;
    if(props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    // if(prop.items.length > 0) {
    //     expneseContent = prop.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />))
    // }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />))}
        </ul>
    )
}