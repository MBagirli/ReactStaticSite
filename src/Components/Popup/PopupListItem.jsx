import { useContext } from "react";
import Add from "../Context/Add";
import "./PopupListItem.css";

const ListItem = (props) => {
  let { minus, plus } = useContext(Add);

  let MinusHandler = (event) => {
    minus(event.target.id);
  };

  let PlusHandler = (event) => {
    plus(event.target.id);
  };

  return (
    <li id={props.id} className="ItemContainer">
      <div className="ItemContainer__info">
        <h3 className="ItemContainer__info__name">{props.obj.meal}</h3>
        <div className="ItemContainer__info__container">
          <p className="ItemContainer__info__container__price">
            {props.obj.price}
          </p>
          <p className="ItemContainer__info__container__quantity">
            x{props.quantity}
          </p>
        </div>
      </div>
      <div className="ItemContainer__button">
        <button
          id={props.btnid}
          onClick={MinusHandler}
          className="ItemContainer__button__btn"
        >
          -
        </button>
        <button
          id={props.btnid}
          onClick={PlusHandler}
          className="ItemContainer__button__btn"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default ListItem;
