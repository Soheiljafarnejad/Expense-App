import Transactions from "./Transactions/Transactions";
import ViewExpense from "./ViewExpense/ViewExpense";
import { useState } from "react";

const ExpenseApp = () => {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [transActions, settranseActions] = useState();
  return (
    <>
      <ViewExpense income={income} expense={expense} />
      <Transactions transActions={transActions} />
    </>
  );
};

export default ExpenseApp;
