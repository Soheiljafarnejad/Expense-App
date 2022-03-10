import style from "./TransAction.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import { CgArrowBottomLeft } from "react-icons/cg";
const TransAction = ({ description, amount, type, date }) => {
  const _date = new Date(date).toLocaleString("en", {
    dateStyle: "medium",
  });
  return (
    <div className={style.container}>
      <div
        className={`${style.title} ${
          type === "income" ? style.income : style.expense
        }`}
      >
        <button>
          {type === "income" ? <CgArrowTopRight /> : <CgArrowBottomLeft />}
        </button>
        <div>
          <h4>{description}</h4>
          <span>{_date}</span>
        </div>
      </div>
      <h4 className={style.amount}>$ {amount}</h4>
      <div>
        <button className={style.trash}>
          <BiTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TransAction;
