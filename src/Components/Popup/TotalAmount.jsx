import Amount from "./TotalAmount.module.css";

let Total = (props) => {
  let CloseHandler = () => {
    props.close();
  };

  return (
    <li className={Amount.container}>
      <div className={Amount.container__total}>
        <p className={Amount.container__total__p}>Total Amount</p>
        <p className={Amount.container__total__price}>{`$${Math.round(
          props.totalPrice
        )}`}</p>
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
