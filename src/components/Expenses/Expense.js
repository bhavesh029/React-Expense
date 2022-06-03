import react, {useState} from "react";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import './Expense.css';
import Card from "../UI/Card";
function Expense(props) {
  const [yearFilter, setYearFilter] = useState('2020');
  const onChangeFilterHandler = selectedYear => {
      setYearFilter(selectedYear);
  }
      return (
        <div>
          <Card className="expenses">
            <ExpenseFilter selectedYear={yearFilter} onChangeFilter={onChangeFilterHandler}/>
            {props.items.map((expense) => (
              <ExpenseItems 
                key={expense.id}
                title={expense.title}
                type={expense.type}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
        </Card>
        </div>
      );
}
export default Expense;