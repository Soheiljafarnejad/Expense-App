import { useState } from "react";
import ExpenseForm from "../TransActionForm/TransActionForm";
import style from "./ViewExpense.module.css";
const ViewExpense = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <section>
      <div className={style.topSection}>
        <h2>Balance:{income - expense}</h2>
        <button onClick={() => setIsShow(!isShow)}>add</button>
      </div>
      {isShow && <ExpenseForm addTransAction={addTransAction} />}
      <div className={style.bottomSection}>
        <h2>Expense:{expense}</h2>
        <h2>income:{income}</h2>
      </div>
    </section>
  );
};

export default ViewExpense;
