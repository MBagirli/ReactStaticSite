import { useContext } from "react";
import Container from "./PopupContainer.module.css";
import PopupList from "./PopupList";
import Add from "../Context/Add";

let PopupContainer = (props) => {
  let { clicked } = useContext(Add);

  let CloseHandler = () => {
    props.close();
  };

  let MinusHandler = (Item) => {
    props.minus(Item);
  };

  let PlusHandler = (Item) => {
    props.plus(Item);
  };

  return (
    <div id={clicked ? Container.opened : ""} className={Container.container}>
      <PopupList plus={PlusHandler} minus={MinusHandler} close={CloseHandler} />
    </div>
  );
};

export default PopupContainer;
