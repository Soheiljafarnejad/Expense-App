import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsShow }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: "",
    description: "",
  });

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValue.description !== "") {
      addTransAction(formValue);
      setFormValue({
        type: "expense",
        amount: "",
        description: "",
      });
    }
    setIsShow(false);
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <input
          autocomplete="off"
          onChange={changeHandler}
          type="text"
          placeholder="description..."
          name="description"
          value={formValue.description}
        />
        <input
          autocomplete="off"
          onChange={changeHandler}
          type="number"
          placeholder="amount..."
          name="amount"
          value={formValue.amount}
        />
        <div>
          <input
            type="radio"
            name="type"
            value="expense"
            id="expense"
            checked={formValue.type === "expense"}
            onChange={changeHandler}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="type"
            value="income"
            id="income"
            checked={formValue.type === "income"}
            onChange={changeHandler}
          />
          <label htmlFor="income">Income</label>
        </div>
        <button type="submit">add</button>
      </form>
    </section>
  );
};

export default TransActionForm;
