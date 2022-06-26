import { useState } from "react";
import CButtonCss from "./CButton.module.css";

const CButton = (props) => {
  let [bool, setBool] = useState(true);
  let Adding = () => {
    props.Add(bool, props.id);
    setBool(false);
  };

  return (
    <button id={props.id} onClick={Adding} className={CButtonCss.btn}>
      {props.children}
    </button>
  );
};

export default CButton;
