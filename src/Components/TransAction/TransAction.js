import style from "./TransAction.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import { CgArrowBottomLeft } from "react-icons/cg";
import ReactTooltip from "react-tooltip";

const TransAction = ({ description, amount, type, date, onDelete }) => {
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
      <div className={style.amount}>
        <h4 data-tip={`$ ${parseFloat(amount)}`}>${parseFloat(amount)}</h4>
        <ReactTooltip className="tooltip" />
      </div>
      <div>
        <button className={style.trash}>
          <BiTrashAlt onClick={onDelete} />
        </button>
      </div>
    </div>
  );
};

export default TransAction;
