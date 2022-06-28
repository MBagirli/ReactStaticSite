import MealSectionCss from "./MealSection.module.css";
import Meals from "./Meals";
import Add from "./Context/Add";
import { useContext } from "react";

const MealSection = (props) => {
  let { ArrayMeals } = useContext(Add);

  let AddHandler = (id, number) => {
    props.Add(id, number);
  };

  let AllMeals = ArrayMeals.map((item, index) => {
    return <Meals Add={AddHandler} key={index} id={index} obj={item} />;
  });

  return (
    <section className={MealSectionCss.container}>
      <ul className={MealSectionCss.container__list}>{AllMeals}</ul>
    </section>
  );
};

export default MealSection;
