import style from "./Card.module.css";
import logo from "./img/logo.png";
import chip from "./img/chip.png";

const Card = () => {
  return (
    <section className={style.card}>
      <div className={`${style.card__front} ${style.card__part}`}>
        <img
          className={`${style.card__front_square} ${style.card__square}`}
          src={chip}
          alt="chip"
        />
        <img
          className={`${style.card__front_logo} ${style.card__logo}`}
          src={logo}
          alt="logo"
        />
        <p className={style.card_number}>**** **** **** 6258</p>
        <div className={style.card__space75}>
          <span className={style.card__label}>Card holder</span>
          <p className={`${style.card__info} ${style.card__name}`}>your name</p>
        </div>
        <div className={style.card__space25}>
          <span className={style.card__label}>Expires</span>
          <p className={style.card__info}>10/25</p>
        </div>
      </div>

      <div className={`${style.card__back} ${style.card__part}`}>
        <div className={style.card__black_line}></div>
        <div className={style.card__back_content}>
          <div className={style.card__secret}>
            <p className={style.card__secret_last}>425</p>
          </div>
          {/* <img
            className={`${style.card__back_square} ${style.card__square}`}
            src={chip}
            alt="chip"
          /> */}
          <img
            className={`${style.card__back_logo} ${style.card__logo}`}
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;
