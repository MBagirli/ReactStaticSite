import { useContext } from "react";
import Add from "../Context/Add";
import List from "../MealSection.module.css";
import Total from "./TotalAmount";
import ListItem from "./PopupListItem";

let PopupList = () => {
  let { IdQuantity, ArrayofMeals } = useContext(Add);

  let Meals = Object.values(IdQuantity).map((item, index) => {
    return (
      <ListItem
        key={index}
        id={item === 0 ? "NotSelected" : "Selected"}
        obj={ArrayofMeals[index]}
        quantity={item}
        btnid={Object.keys(IdQuantity)[index]}
      />
    );
  });

  return (
    <ul className={List.container__list}>
      {Meals}
      <Total />
    </ul>
  );
};

export default PopupList;
