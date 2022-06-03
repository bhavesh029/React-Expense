import react, {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import './Expense.css';
import Card from "../UI/Card";
function Expense(props) {
  const [yearFilter, setYearFilter] = useState('2020');
  const onChangeFilterHandler = selectedYear => {
      setYearFilter(selectedYear);
  }
  const filteredYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === yearFilter;
  })

  
      return (
        <div>
          <Card className="expenses">
            <ExpenseFilter selectedYear={yearFilter} onChangeFilter={onChangeFilterHandler}/>
            <ExpenseList items={filteredYear}/>
        </Card>
        </div>
      );
}
export default Expense;