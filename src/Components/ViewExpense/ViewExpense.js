import style from "./ViewExpense.module.css"
const ViewExpense = ({ income, expense }) => {
  return (
    <section>
      <div className={style.topSection}>
        <h2>Balance:{income - expense}</h2>
        <button>add</button>
      </div>
      <div className={style.bottomSection}>
        <h2>Expense:{expense}</h2>
        <h2>income:{income}</h2>
      </div>
    </section>
  );
};

export default ViewExpense;
