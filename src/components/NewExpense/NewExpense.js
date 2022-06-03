import react, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const getDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        }
        props.onSaveData(expenseData);
    }
    const startEditingHandler =() => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
        {isEditing && <ExpenseForm  onSaveData ={getDataHandler} onCancel={stopEditingHandler}/>}
    </div>
    );
}

export default NewExpense;