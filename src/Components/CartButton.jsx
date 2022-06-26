import "./CartButton.css";
import carticon from "../icons/cart-outline.svg";
import { useContext } from "react";
import Add from "./Context/Add";

const CartButton = (props) => {
  let ClickHandler = () => {
    props.Click();
  };

  let { numbers, animation } = useContext(Add);
  return (
    <button
      onClick={ClickHandler}
      id={animation ? "animation" : ""}
      className="btn"
    >
      <div className="btn__container">
        <img className="btn__container__img" src={carticon} alt="CartIcon" />
        <p className="btn__container__text">Your Cart</p>
      </div>
      <p className="btn__number">
        {Number(numbers.first) +
          Number(numbers.second) +
          Number(numbers.third) +
          Number(numbers.fourth)}
      </p>
    </button>
  );
};

export default CartButton;
