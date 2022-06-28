import MealsCss from "./Meals.module.css";
import CButton from "./CButton";
import { useRef } from "react";

const Meals = (props) => {
  let AddHandler = (id) => {
    props.Add(id, value.current.value);
  };

  let value = useRef();

  return (
    <li id={props.id} className={MealsCss.ListItem}>
      <div className={MealsCss.ListItem__Meal}>
        <h3 className={MealsCss.ListItem__Meal__Name}>{props.obj.meal}</h3>
        <i className={MealsCss.ListItem__Meal__Info}>{props.obj.info}</i>
        <p className={MealsCss.ListItem__Meal__Price}>{props.obj.price}</p>
      </div>
      <div className={MealsCss.ListItem__PriceContainer}>
        <div className={MealsCss.ListItem__PriceContainer__Amount}>
          <p className={MealsCss.ListItem__PriceContainer__Amount__p}>Amount</p>
          <input
            ref={value}
            className={MealsCss.ListItem__PriceContainer__Amount__input}
            type="number"
            min="0"
          />
        </div>
        <CButton Add={AddHandler} id={props.id}>
          +Add
        </CButton>
      </div>
    </li>
  );
};

export default Meals;
