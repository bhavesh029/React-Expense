import react, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);    
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    } 

    const formHandler = (event) => {
        event.preventDefault();
        const obj = {
            title: enteredTitle,
            amount: enteredamount,
            date: new Date(enteredDate)
        }
        props.onSaveData(obj);
        //console.log(obj);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    return <form onSubmit={formHandler} >
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredamount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;