import { useState } from "react";
import TransActionForm from "../TransActionForm/TransActionForm";
import Modal from "../../common/Modal/Modal";
import style from "./Transeaction.module.css";
const Transactions = ({ transActions, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section>
      <div className={style.TransActions}>
        <h2>Transactions:</h2>
        <button onClick={() => setIsShow(!isShow)}>add</button>
        {isShow && (
          <Modal>
            <TransActionForm
              addTransAction={addTransAction}
              setIsShow={setIsShow}
            />
          </Modal>
        )}
      </div>
      {transActions.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Transactions;
