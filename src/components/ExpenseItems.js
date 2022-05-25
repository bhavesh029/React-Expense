import './ExpenseItems.css';

function ExpenseItems(props) {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('En-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return <div className='expense-item'>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h3>{props.type}</h3>
        <div className='expense-item__price'>$ {props.amount}</div>
        </div>
    </div>;
}

export default ExpenseItems;