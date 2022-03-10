import { useState } from "react";
import style from "./TransActionForm.module.css";
import toast, { Toaster } from "react-hot-toast";

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
    if (e.nativeEvent.submitter.value === "cancel") {
      setFormValue({
        type: "expense",
        amount: "",
        description: "",
      });
      setIsShow(false);

      return;
    }
    if (!formValue.description || !formValue.amount) {
      toast.error("Please fill all fields");
      return;
    }
    addTransAction(formValue);
    setFormValue({
      type: "expense",
      amount: "",
      description: "",
    });
    setIsShow(false);
  };

  return (
    <section className={style.container}>
      <h2>add new TransAction</h2>
      <form onSubmit={submitHandler} className={style.form}>
        <input
          autoComplete="off"
          onChange={changeHandler}
          type="text"
          placeholder="description..."
          name="description"
          value={formValue.description}
        />
        <div className={style.number}>
          <input
            onChange={changeHandler}
            type="number"
            placeholder="amount..."
            name="amount"
            value={formValue.amount}
          />
          <span>$</span>
        </div>
        <div className={style.radio}>
          <input
            type="radio"
            name="type"
            value="expense"
            id="expense"
            checked={formValue.type === "expense"}
            onChange={changeHandler}
          />
          <label
            htmlFor="expense"
            className={`${formValue.type === "expense" && style.checked}`}
          >
            Expense
          </label>
          <input
            type="radio"
            name="type"
            value="income"
            id="income"
            checked={formValue.type === "income"}
            onChange={changeHandler}
          />
          <label
            htmlFor="income"
            className={`${formValue.type === "income" && style.checked}`}
          >
            Income
          </label>
        </div>
        <Toaster />
        <div className={style.btn}>
          <button className={style.cancel} type="submit" value="cancel">
            cancel
          </button>
          <button className={style.save} type="submit" value="save">
            save
          </button>
        </div>
      </form>
    </section>
  );
};

export default TransActionForm;
