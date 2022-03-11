import style from "./NavBar.module.css";
import img from "./img/git-light.jpg";
import { BsGridFill } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
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
        <h1 className={`${style.title}`}>Expense App</h1>
      </div>
      <div className={style.main}>
        <div className={`${style.icons} ${style.select}`}>
          <BsGridFill />
          <h2>Dashboards</h2>
        </div>
        <div className={style.icons}>
          <FaRegCreditCard />
          <h2>My Cards</h2>
        </div>
        <div className={style.icons}>
          <FaCoins />
          <h2>Savings</h2>
        </div>
        <div className={style.icons}>
          <BsWallet2 />
          <h2>TransActions</h2>
        </div>
        <div className={style.icons}>
          <HiOutlineChartPie />
          <h2>Statistic</h2>
        </div>
      </div>
        <div className={`${style.icons} ${style.footer}`}>
          <FiSettings />
          <h2>Settings</h2>
        </div>
    </section>
  );
};

export default NavBar;
