import style from "./NavBar.module.css";
import img from "./img/git-light.jpg";
import { BsGridFill } from "react-icons/bs";
import { BsWindow } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const NavBar = () => {
  return (
    <section className={style.navBar}>
      <div className={style.header}>
        <a
          href="https://github.com/Soheiljafarnejad/Expense-App.git"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.profile} src={img} alt="profile-github" />
        </a>
        <h1 className={`${style.title}`}>Expense</h1>
      </div>
      <div className={style.main}>
        <div className={`${style.icons} ${style.select}`}>
          <BsGridFill />
          <h3>Dashboards</h3>
        </div>
        <div className={style.icons}>
          <BsWindow />
          <h3>My Cards</h3>
        </div>
        <div className={style.icons}>
          <FaCoins />
          <h3>Savings</h3>
        </div>
        <div className={style.icons}>
          <BsWallet2 />
          <h3>TransActions</h3>
        </div>
        <div className={style.icons}>
          <HiOutlineChartPie />
          <h3>Statistic</h3>
        </div>
      </div>
        <div className={`${style.icons} ${style.footer}`}>
          <FiSettings />
          <h3>Settings</h3>
        </div>
    </section>
  );
};

export default NavBar;
