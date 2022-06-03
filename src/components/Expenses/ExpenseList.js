import ExpenseItems from "./ExpenseItems";
import './ExpenseList.css';
const ExpenseList = (props) => {
  if(props.items.length === 0){
      return <h2 className="expenses-list__fallback">No items Found</h2>
  }  
  else if(props.items.length === 1){
    return(
        <ul className="expenses-list">
         {props.items.map((expense) => (
            <ExpenseItems 
              key={expense.id}
              title={expense.title}
              type={expense.type}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
          <h2 className="expenses-list__fallback">Add Some More Items</h2>
        </ul>
       )
  }
  return(
    <ul className="expenses-list">
     {props.items.map((expense) => (
        <ExpenseItems 
          key={expense.id}
          title={expense.title}
          type={expense.type}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
   )
  }

export default ExpenseList;