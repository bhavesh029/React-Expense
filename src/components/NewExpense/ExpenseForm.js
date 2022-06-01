import react, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
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

        console.log(obj);
    }
    return <form onSubmit={formHandler} >
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;