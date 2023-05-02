import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  const settingtitle = (event) => {
    setNewTitle(event.target.value);
  };
  const settingamount = (event) => {
    setNewAmount(event.target.value);
  };
  const settingdate = (event) => {
    setNewDate(event.target.value);
  };
  const submittingdata = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    props.onSaveExpenseData(expenseData);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };
  return (
    <form onSubmit={submittingdata}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={settingtitle}
          value = {newTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {newAmount}
            onChange={settingamount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="019-01-01"
            max="2023-12-31"
            value={newDate}
            onChange={settingdate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
