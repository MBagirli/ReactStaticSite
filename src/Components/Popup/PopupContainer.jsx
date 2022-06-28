import Container from "./PopupContainer.module.css";
import PopupList from "./PopupList";
import Add from "../Context/Add";
import { useContext } from "react";

let PopupContainer = (props) => {
  let { Popup } = useContext(Add);

  let CloseAndOrder = (bool) => {
    props.cao(bool);
  };

  let MinusHandler = (id) => {
    props.minus(id);
  };

  let PlusHandler = (id) => {
    props.plus(id);
  };

  return (
    <div id={Popup ? Container.opened : ""} className={Container.container}>
      <PopupList plus={PlusHandler} minus={MinusHandler} cao={CloseAndOrder} />
    </div>
  );
};

export default PopupContainer;
