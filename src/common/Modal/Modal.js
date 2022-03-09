import style from "./Modal.module.css";
const Modal = ({ children }) => {
  return <section className={style.modal}>{children}</section>;
};

export default Modal;
