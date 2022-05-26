import react from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';
import './ExpenseItems.css';

function ExpenseItems(props) {
    
    return <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <ExpenseDetail title={props.title} type={props.type} amount={props.amount}/>
    </Card>;
}

export default ExpenseItems;