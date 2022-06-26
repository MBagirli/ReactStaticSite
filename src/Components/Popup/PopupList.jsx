import List from "../MealSection.module.css";
import TotalAmount from "./TotalAmount";
import ListItem from "./PopupListItem";
import Add from "../Context/Add";
import { useContext } from "react";

let PopupList = (props) => {
  let { numbers } = useContext(Add);

  let MinusHandler = (Item) => {
    props.minus(Item);
  };

  let PlusHandler = (Item) => {
    props.plus(Item);
  };

  let obj1 = { food: "Sushi", price: 22.99, quantity: Number(numbers.first) };

  let obj2 = {
    food: "Schnitzel",
    price: 16.55,
    quantity: Number(numbers.second),
  };

  let obj3 = { food: "Dolma", price: 20.99, quantity: Number(numbers.third) };

  let obj4 = {
    food: "Nuggets",
    price: 20.99,
    quantity: Number(numbers.fourth),
  };

  let CloseHandler = () => {
    props.close();
  };

  return (
    <ul className={List.container__list}>
      <ListItem
        minus={MinusHandler}
        plus={PlusHandler}
        id={Number(numbers.first) === 0 ? "NotSelected" : "Selected"}
        obj={obj1}
      />
      <ListItem
        minus={MinusHandler}
        plus={PlusHandler}
        id={Number(numbers.second) === 0 ? "NotSelected" : "Selected"}
        obj={obj2}
      />
      <ListItem
        minus={MinusHandler}
        plus={PlusHandler}
        id={Number(numbers.third) === 0 ? "NotSelected" : "Selected"}
        obj={obj3}
      />
      <ListItem
        minus={MinusHandler}
        plus={PlusHandler}
        id={Number(numbers.fourth) === 0 ? "NotSelected" : "Selected"}
        obj={obj4}
      />
      <TotalAmount
        close={CloseHandler}
        totalPrice={
          obj1.price * obj1.quantity +
          obj2.price * obj2.quantity +
          obj3.price * obj3.quantity +
          obj4.price * obj4.quantity
        }
      />
    </ul>
  );
};

export default PopupList;
