import { useEffect, useRef, useState } from "react";
import style from "./TransActionForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const TransActionForm = ({ addTransAction, setIsShow }) => {
  const des = useRef();
  const num = useRef();

  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: "",
    description: "",
  });

  useEffect(() => {
    des.current.focus();
  }, []);

  const cancelHandler = () => {
    setFormValue({
      type: "expense",
      amount: "",
      description: "",
    });
    setIsShow(false);

    return;
  };

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formValue.description || !formValue.amount) {
      !formValue.description ? des.current.focus() : num.current.focus();
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
      <h2>new Transaction</h2>
      <form onSubmit={submitHandler} className={style.form}>
        <input
          ref={des}
          autoComplete="off"
          onChange={changeHandler}
          type="text"
          placeholder="description..."
          name="description"
          value={formValue.description}
        />
        <div className={style.number}>
          <input
            ref={num}
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
          <button
            onClick={cancelHandler}
            className={style.cancel}
            type="button"
            value="cancel"
          >
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
