import TransactionList from "./TransActionList/TransActionList";
import ViewExpense from "./ViewExpense/ViewExpense";
import SelectCom from "../common/Select/SelectCom";
import { useEffect, useState } from "react";

const ExpenseApp = () => {

  const options = [
    { value: "all", label: "All" },
    { value: "high", label: "high to low" },
    { value: "low", label: "low to high" },
    { value: "income", label: "income" },
    { value: "expense", label: "expense" },
  ];

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [sort, setSort] = useState(options[0]);
  const [transActions, setTransActions] = useState([]);
  const [transActionsList, setTransActionsList] = useState([]);

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
    const getTransAction =
      JSON.parse(localStorage.getItem("transAction")) || [];
    if (getTransAction) {
      setTransActions(getTransAction);
      setTransActionsList(getTransAction);
    }
  }, []);

  useEffect(() => {
    setSort("all");
    localStorage.setItem("transAction", JSON.stringify(transActions));
    setTransActionsList(transActions);
    setSort({ value: "all", label: "All" });

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

  const sortHandler = (e) => {
    const value = e.value;
    const selectValue = options.filter((item) => item.value === value);
    setSort(selectValue);

    if (value === "income" || value === "expense") {
      const filtered = transActions.filter((item) => item.type === value);
      setTransActionsList(filtered);
      return;
    }

    switch (value) {
      case "low": {
        const clone = [...transActions];
        const sorted = clone.sort((a, b) => {
          return a.amount - b.amount;
        });
        return setTransActionsList(sorted);
      }
      case "high": {
        const clone = [...transActions];
        const sorted = clone.sort((a, b) => {
          return b.amount - a.amount;
        });
        return setTransActionsList(sorted);
      }
      case "all": {
        return setTransActionsList(transActions);
      }
      default:
        return setTransActionsList(transActions);
    }
  };

  return (
    <>
      <ViewExpense income={income} expense={expense} />
      <SelectCom
        title="sort by:"
        options={options}
        onChange={sortHandler}
        defaultValue={options[0]}
        value={sort}
      />
      <TransactionList
        transActionList={transActionsList}
        addTransAction={addTransAction}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default ExpenseApp;
