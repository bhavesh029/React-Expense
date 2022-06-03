import react, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";

const DUMMY_DATA = [
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
function App() {
const [expense, setExpense] = useState(DUMMY_DATA);
const onSaveDataHandler = expense => {
  setExpense(prevExpense => {
    return [expense, ...prevExpense];
  })
}
  return (
    <div>
      <NewExpense onSaveData={onSaveDataHandler}/>
      <Expense items={expense}/>
    </div>
    )
}

export default App;
