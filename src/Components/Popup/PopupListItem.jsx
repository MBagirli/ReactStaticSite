import "./PopupListItem.css";

const ListItem = (props) => {
  let MinusHandler = () => {
    props.minus(props.obj);
  };

  let PlusHandler = () => {
    props.plus(props.obj);
  };

  return (
    <li id={props.id} className="ItemContainer">
      <div className="ItemContainer__info">
        <h3 className="ItemContainer__info__name">{props.obj.food}</h3>
        <div className="ItemContainer__info__container">
          <p className="ItemContainer__info__container__price">{`$${props.obj.price}`}</p>
          <p className="ItemContainer__info__container__quantity">{`x${props.obj.quantity}`}</p>
        </div>
      </div>
      <div className="ItemContainer__button">
        <button onClick={MinusHandler} className="ItemContainer__button__btn">
          -
        </button>
        <button onClick={PlusHandler} className="ItemContainer__button__btn">
          +
        </button>
      </div>
    </li>
  );
};

export default ListItem;
