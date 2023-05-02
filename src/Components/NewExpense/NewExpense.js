import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const [isEditing,setisEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setisEditing(false);
    }
    const startEditing = ()=>{
        setisEditing(true);
    }
    const stopEditing = ()=>{
        setisEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditing} />}
        </div>
    );
}

export default NewExpense;