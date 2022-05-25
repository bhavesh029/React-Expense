import './ExpenseItems.css';

function ExpenseItems() {
    const expenseDate = new Date(2022, 5, 25);
    const expensetitle = "Title of the expense";
    const expenseamount = 768;
    return <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{expensetitle}</h2>
        <div className='expense-item__price'>$ {expenseamount}</div>
        </div>
    </div>;
}

export default ExpenseItems;