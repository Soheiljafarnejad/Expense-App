import { useState } from "react";
import TransActionForm from "../TransActionForm/TransActionForm";
import Modal from "../../common/Modal/Modal";
import style from "./TransActionList.module.css";
import TransAction from "../TransAction/TransAction";
const TransactionList = ({ transActionList, addTransAction, deleteHandler }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section className={style.container}>
      <div className={style.title}>
        <h2>Transactions:</h2>
        <button onClick={() => setIsShow(true)}>add</button>
        {isShow && (
          <Modal>
            <TransActionForm
              addTransAction={addTransAction}
              setIsShow={setIsShow}
            />
          </Modal>
        )}
      </div>
      <div>
        {transActionList.map((item) => {
          return (
            <TransAction
              key={item.id}
              description={item.description}
              amount={item.amount}
              type={item.type}
              date={item.date}
              onDelete={() => deleteHandler(item.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TransactionList;
