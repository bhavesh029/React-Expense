import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const getDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        }
        props.onSaveData(expenseData);
    }
    return (
    <div className='new-expense'>
        <ExpenseForm  onSaveData ={getDataHandler}/>
    </div>
    );
}

export default NewExpense;