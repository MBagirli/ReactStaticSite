import { useContext } from "react";
import Add from "../Context/Add";
import Amount from "./TotalAmount.module.css";

let Total = () => {
  let { closePopup, ArrayofMeals, IdQuantity } = useContext(Add);

  let CloseHandler = () => {
    closePopup(false);
  };

  let i = 0;
  for (let j in ArrayofMeals) {
    i += ArrayofMeals[j].price * Object.values(IdQuantity)[j];
  }

  return (
    <li className={Amount.container}>
      <div className={Amount.container__total}>
        <p className={Amount.container__total__p}>Total Amount</p>
        <p className={Amount.container__total__price}>${i}</p>
      </div>
      <div className={Amount.container__btn}>
        <button onClick={CloseHandler} className={Amount.container__btn__1}>
          Order
        </button>
        <button onClick={CloseHandler} className={Amount.container__btn__2}>
          Close
        </button>
      </div>
    </li>
  );
};

export default Total;
