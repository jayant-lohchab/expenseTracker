import './ExpenseDate.css'
const ExpenseDate=(props)=>{
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    return (
        <div className="date-here">
        <div className='month-here'>{month}</div>
        <div className='year-here'>{year}</div>
        <div className='day-here'>{day}</div>
      </div>
    );
}
export default ExpenseDate;