import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
function App() {
const onSaveDataHandler = expense => {
  console.log(expense);
}
  return (
    <div>
      <NewExpense onSaveData={onSaveDataHandler}/>
      <Expense />
    </div>
    )
}

export default App;
