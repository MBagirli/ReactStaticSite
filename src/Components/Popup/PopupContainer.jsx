import { useContext } from "react";
import Add from "../Context/Add";
import Container from "./PopupContainer.module.css";
import PopupList from "./PopupList";

let PopupContainer = () => {
  let { Popup } = useContext(Add);
  return (
    <div id={Popup ? Container.opened : ""} className={Container.container}>
      <PopupList />
    </div>
  );
};

export default PopupContainer;
