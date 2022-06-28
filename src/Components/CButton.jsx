import CButtonCss from "./CButton.module.css";

const CButton = (props) => {
  let ClickHandler = (event) => {
    props.add(event.target.id);
  };

  return (
    <button id={props.id} onClick={ClickHandler} className={CButtonCss.btn}>
      {props.children}
    </button>
  );
};

export default CButton;
