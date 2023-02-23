import React, {useState} from 'react'
import { Expenses } from './components/Expenses/Expenses'
import { NewExpenses } from './components/NewExpenses/NewExpenses'


const DUMMY_EXPENSES = [
  {
    id: 'a1',
    title: 'Toilet Paper',
    amount: 200.56,
    date: new Date(2022, 2, 10)
  },
  {
    id: 'b1',
    title: 'Food Items',
    amount: 450.90,
    date: new Date(2022, 1, 20)
  },
  {
    id: 'c1',
    title: 'Wifi',
    amount: 50.56,
    date: new Date(2022, 2, 10)
  },
  {
    id: 'd1',
    title: 'Shoes',
    amount: 600.56,
    date: new Date(2022, 5, 20)
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHadler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHadler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
