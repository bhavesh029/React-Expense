import react, {useState} from 'react';
import './ExpenseItems.css';

function ExpenseDetail(props){
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    let clickHandler = () => {
        setTitle('Updated');
    }
    let priceHandler = () => {
        setAmount(250);
    }
    return <div className='expense-item__description'>
        <h2>{title}</h2>
        <h3>{props.type}</h3>
        <div className='expense-item__price'>$ {amount}</div>
        <button onClick={clickHandler}>Update</button>
        <button onClick={priceHandler}>Change Amount</button>
    </div>
}

export default ExpenseDetail;