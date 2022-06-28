import { useContext } from "react";
import Add from "./Context/Add";
import MealSectionCss from "./MealSection.module.css";
import Meals from "./Meals";

const MealSection = () => {
  let { ArrayofMeals, IdQuantity } = useContext(Add);

  let meals = ArrayofMeals.map((item, index) => {
    return (
      <Meals
        key={Object.keys(IdQuantity)[index]}
        id={Object.keys(IdQuantity)[index]}
        obj={item}
      />
    );
  });

  return (
    <section className={MealSectionCss.container}>
      <ul className={MealSectionCss.container__list}>{meals}</ul>
    </section>
  );
};

export default MealSection;
