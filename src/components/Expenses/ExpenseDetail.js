import './ExpenseItems.css';

function ExpenseDetail(props){
    return <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h3>{props.type}</h3>
        <div className='expense-item__price'>$ {props.amount}</div>
    </div>
}

export default ExpenseDetail;