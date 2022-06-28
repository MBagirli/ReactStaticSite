import "./CartButton.css";
import carticon from "../icons/cart-outline.svg";
import Add from "./Context/Add";
import { useContext } from "react";

const CartButton = (props) => {
  let { Animation, Sum } = useContext(Add);

  let Popup = () => {
    props.popup(true);
  };

  return (
    <button onClick={Popup} id={Animation ? "animation" : ""} className="btn">
      <div className="btn__container">
        <img className="btn__container__img" src={carticon} alt="CartIcon" />
        <p className="btn__container__text">Your Cart</p>
      </div>
      <p className="btn__number">{Sum}</p>
    </button>
  );
};

export default CartButton;
