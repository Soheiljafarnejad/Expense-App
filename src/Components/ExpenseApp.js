import TransactionList from "./TransActionList/TransActionList";
import ViewExpense from "./ViewExpense/ViewExpense";
import { useEffect, useState } from "react";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transActions, setTransActions] = useState([]);

  const addTransAction = (value) => {
    setTransActions([
      ...transActions,
      { ...value, id: Date.now(), date: Date().toLocaleString() },
    ]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transActions.forEach((item) => {
      item.type === "expense"
        ? (exp = exp + parseFloat(item.amount))
        : (inc = inc + parseFloat(item.amount));
      setExpense(exp);
      setIncome(inc);
    });
  }, [transActions]);

  return (
    <>
      <ViewExpense income={income} expense={expense} />
      <TransactionList
        transActions={transActions}
        addTransAction={addTransAction}
      />
    </>
  );
};

export default ExpenseApp;
