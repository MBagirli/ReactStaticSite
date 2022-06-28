import "./CartButton.css";
import carticon from "../icons/cart-outline.svg";
import Add from "./Context/Add";
import { useContext } from "react";

const CartButton = (props) => {
  let { Animation, IdQuantity, openPopup } = useContext(Add);

  let i = 0;
  for (let j of Object.values(IdQuantity)) {
    i += j;
  }

  let OpenPopup = () => {
    openPopup(true);
  };

  return (
    <button
      onClick={OpenPopup}
      id={Animation ? "animation" : ""}
      className="btn"
    >
      <div className="btn__container">
        <img className="btn__container__img" src={carticon} alt="CartIcon" />
        <p className="btn__container__text">Your Cart</p>
      </div>
      <p className="btn__number">{i}</p>
    </button>
  );
};

export default CartButton;
