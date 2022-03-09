import style from "./ViewExpense.module.css";
import { FiSettings } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi";
import { RiSendPlaneLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { CgArrowTopRight } from "react-icons/cg";
import { CgArrowBottomLeft } from "react-icons/cg";
import Card from "../../common/Card/Card";

const ViewExpense = ({ income, expense }) => {
  let inc = Math.ceil((income / (income + expense)) * 100);
  let exp = 100 - inc;
  return (
    <section>
      <section className={style.container}>
        <header className={style.headerCart}>
          <h2>My Cards</h2>
          <div className={style.cartBtn}>
            <button className={style.settings}>
              <FiSettings />
            </button>
            <button>View all</button>
          </div>
        </header>
        <div className={style.bodyCart}>
          <div className={style.cart}>
            <Card />
          </div>
          <div className={style.description}>
            <div className={style.value}>
              <span>Balance</span>
              <h3>${income - expense}</h3>
            </div>
            <div className={style.amount}>
              <div className={style.value}>
                <span>Expense</span>
                <h3>${expense}</h3>
              </div>
              <div className={style.value}>
                <span>Income</span>
                <h3>${income}</h3>
              </div>
            </div>
            <div className={style.cartIcons}>
              <button>
                <HiOutlineChartPie />
              </button>
              <button>
                <RiSendPlaneLine />
              </button>
              <button>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={style.box__Container}>
        <div className={`${style.income} ${style.box}`}>
          <button>
            <CgArrowTopRight />
          </button>
          <div>
            <h2>{inc || 0}%</h2>
            <span>Income</span>
          </div>
        </div>
        <div className={`${style.expense} ${style.box}`}>
          <button>
            <CgArrowBottomLeft />
          </button>
          <div>
            <h2>{exp || 0}%</h2>
            <span>Expense</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewExpense;
