/* eslint-disable react-hooks/exhaustive-deps */
import TransactionList from "./TransActionList/TransActionList";
import ViewExpense from "./ViewExpense/ViewExpense";
import SelectCom from "../common/Select/SelectCom";
import { useEffect, useState } from "react";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [sort, setSort] = useState({ value: "all" });
  const [transActions, setTransActions] = useState([]);
  const [transActionList, setTransActionList] = useState([]);

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
      setTransActionList(transActions);
      return;
    }
    transActions.forEach((item) => {
      item.type === "expense"
        ? (exp = exp + parseFloat(item.amount))
        : (inc = inc + parseFloat(item.amount));
      setExpense(exp);
      setIncome(inc);
    });

    sortHandler(sort);
  }, [transActions]);

  const options = [
    { value: "all", label: "All" },
    { value: "high", label: "high to low" },
    { value: "low", label: "low to high" },
    { value: "income", label: "income" },
    { value: "expense", label: "expense" },
  ];

  const sortHandler = (e) => {
    setSort({ value: e.value });
    if (e.value === "income" || e.value === "expense") {
      const filtered = transActions.filter((item) => item.type === e.value);
      setTransActionList(filtered);
      return;
    }
    switch (e.value) {
      case "low": {
        const clone = [...transActions];
        const sorted = clone.sort((a, b) => {
          return a.amount - b.amount;
        });
        return setTransActionList(sorted);
      }
      case "high": {
        const clone = [...transActions];
        const sorted = clone.sort((a, b) => {
          return b.amount - a.amount;
        });
        return setTransActionList(sorted);
      }
      case "all": {
        return setTransActionList(transActions);
      }
      default:
        return setTransActionList(transActions);
    }
  };

  return (
    <>
      <ViewExpense income={income} expense={expense} />
      <SelectCom title="sort by:" options={options} onChange={sortHandler}  defaultValue={options[0]} />
      <TransactionList
        transActionList={transActionList}
        addTransAction={addTransAction}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default ExpenseApp;
