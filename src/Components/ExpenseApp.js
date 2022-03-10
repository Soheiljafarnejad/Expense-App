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

  const deleteHandler = (id) => {
    const deleted = transActions.filter((item) => item.id !== id);
    setTransActions(deleted);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    if (transActions.length === 0) {
      setExpense(0);
      setIncome(0);
      return;
    }
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
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default ExpenseApp;
