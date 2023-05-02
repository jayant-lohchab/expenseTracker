import './App.css';
import { useState } from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';
const DUMMY_EXPENSES = [
  {
    id:"e1",
    date:new Date(2023, 2,19),
    title:"jayant",
    amount:12000,
  },
  {
    id:'e2',
    date:new Date(2023, 2,25),
    title:"harsh",
    amount:9000,
  },
  {
    id:'e3',
    date:new Date(2023, 0,17),
    title:"tarun",
    amount:6000,
  },
  {
    id:'e4',
    date:new Date(2023, 0,20),
    title:"prithi",
    amount:10000,
  }
];
const App =() => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpenses =>{
      return [expense,...prevExpenses];
    })
  }
  return (
    <div>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
