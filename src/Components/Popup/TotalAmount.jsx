import Amount from "./TotalAmount.module.css";
import Add from "../Context/Add";
import { useContext } from "react";

let Total = (props) => {
  let { ArrayMeals, Obj } = useContext(Add);

  let i = 0;
  for (let j in Object.values(Obj)) {
    i += ArrayMeals[j].price * Object.values(Obj)[j];
  }

  let CloseAndOrder = () => {
    props.cao(false);
  };

  return (
    <li className={Amount.container}>
      <div className={Amount.container__total}>
        <p className={Amount.container__total__p}>Total Amount</p>
        <p className={Amount.container__total__price}>{`$${i}`}</p>
      </div>
      <div className={Amount.container__btn}>
        <button onClick={CloseAndOrder} className={Amount.container__btn__1}>
          Order
        </button>
        <button onClick={CloseAndOrder} className={Amount.container__btn__2}>
          Close
        </button>
      </div>
    </li>
  );
};

export default Total;
