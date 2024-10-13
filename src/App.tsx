import { Dispatch, useEffect, useState } from "react";
import { ExpenseData, LoadingStatus } from "./global/types";
import RefreshExpenses from "./modules/refresh_expenses";
import TitleBar from "./modules/title_bar";
import ExpensesTable from "./modules/expenses_table";

const App = () => {
  const [expensesData, setExpensesData]: [Array<ExpenseData>, Dispatch<Array<ExpenseData>>] = useState<Array<ExpenseData>>([]);
  const [expensesFetchStatus, setExpensesFetchStatus]: [LoadingStatus, Dispatch<LoadingStatus>] = useState<LoadingStatus>('loading');
  const [expensesFetchErrorMsg, setExpensesFetchErrorMsg]: [string, Dispatch<string>] = useState<string>("");
  const FetchExpensesData = () => {
    setExpensesFetchStatus('loading');
    setExpensesFetchErrorMsg('');
    try {
      fetch("https://expenses-backend-mu.vercel.app/expenses",
        {
          headers: {
            "Content-Type": "application/json",
            Username: "gianfranco.coppola"
          }
      })
      .then((res) => res.json())
      .then((data) => {
        setExpensesData(data);
        setExpensesFetchStatus('complete');
      })
    }
    catch (e) {
      const error = e as Error;
      setExpensesFetchStatus("failed");
      error.message ? setExpensesFetchErrorMsg(error.message) : null;
      console.log('Error:', e);
    }
  }
  useEffect( () => {
    FetchExpensesData();
  }, [])
  return (
    <main>
      <section className="app-container">
        <TitleBar>
          <RefreshExpenses FetchExpensesData={FetchExpensesData}/>
        </TitleBar>
        <ExpensesTable expensesData={expensesData} expensesFetchErrorMsg={expensesFetchErrorMsg}
        expensesFetchStatus={expensesFetchStatus} />
      </section>
    </main>
  );
}

export default App;
