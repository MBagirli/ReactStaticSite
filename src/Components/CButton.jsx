import CButtonCss from "./CButton.module.css";

const CButton = (props) => {
  let AddHandler = () => {
    props.Add(props.id);
  };

  return (
    <button onClick={AddHandler} id={props.id} className={CButtonCss.btn}>
      {props.children}
    </button>
  );
};

export default CButton;
