import React, {useState} from 'react';
import { Card } from '../UI/Card';
import './Expenses.css'
import { ExpensesChart } from './ExpensesChart';
import { ExpensesFilter } from './ExpensesFilter';
import { ExpensesList } from './ExpensesList';

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expneseContent = <p>No expense found</p>;
    // if(filteredExpenses.length > 0) {
    //     expneseContent = filteredExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />))
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                
                {/* Approach One */}
                {/* {filteredExpenses.length === 0 && (<p>No expense found</p>)} */}
                {/* {filteredExpenses.length > 0 && (filteredExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)))} */}

                {/* Approach Two */}
                {/* {filteredYear.length === 0 ? (<p>No expense found</p>) : (filteredExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)))}   */}

                {/* Clean Approach */}
                {/* {expneseContent} */}

                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
    )
}
