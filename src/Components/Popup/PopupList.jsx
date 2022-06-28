import { useContext } from "react";
import List from "../MealSection.module.css";
import Total from "./TotalAmount";
import Add from "../Context/Add";
import ListItem from "./PopupListItem";

let PopupList = (props) => {
  let { ArrayMeals, Obj } = useContext(Add);

  let MinusHandler = (id) => {
    props.minus(id);
  };

  let PlusHandler = (id) => {
    props.plus(id);
  };

  let Meals = Object.values(Obj).map((item, index) => {
    if (Number(item) === 0) {
      return (
        <ListItem key={index} id={"NotSelected"} obj={ArrayMeals[index]} />
      );
    } else {
      return (
        <ListItem
          minus={MinusHandler}
          plus={PlusHandler}
          key={index}
          id={"Selected"}
          idbtn={index}
          obj={ArrayMeals[index]}
          quantity={item}
        />
      );
    }
  });

  let CloseAndOrder = (bool) => {
    props.cao(bool);
  };

  return (
    <ul className={List.container__list}>
      {Meals}
      <Total cao={CloseAndOrder} />
    </ul>
  );
};

export default PopupList;
