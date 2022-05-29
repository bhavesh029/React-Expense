import react from "react";
import ExpenseItems from "./ExpenseItems";
import './Expense.css';
import Card from "../UI/Card";
function Expense() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      type:"Home",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
     title: 'New TV',
     type:"Entertainment",
     amount: 799.49,
     date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      type:"Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      type:"Work",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
      return (
        <div>
          <Card className="expenses">
              <ExpenseItems 
                  title={expenses[0].title} 
                  type={expenses[0].type} 
                  amount={expenses[0].amount} 
                  date={expenses[0].date}>
              </ExpenseItems>
              <ExpenseItems 
                  title={expenses[1].title} 
                  type={expenses[1].type} 
                  amount={expenses[1].amount} 
                  date={expenses[1].date}>
              </ExpenseItems>
            <ExpenseItems 
                title={expenses[2].title} 
                type={expenses[2].type} 
                amount={expenses[2].amount} 
                date={expenses[2].date}>
            </ExpenseItems>
        </Card>
        </div>
      );
}
export default Expense;