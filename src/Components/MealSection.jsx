import MealSectionCss from "./MealSection.module.css";
import Meals from "./Meals";

const MealSection = (props) => {
  let Adding = (number, bool, id) => {
    props.Add(number, bool, id);
  };

  return (
    <section className={MealSectionCss.container}>
      <ul className={MealSectionCss.container__list}>
        <Meals
          id="m1"
          Add={Adding}
          obj={{ meal: "Sushi", info: "Finest fish veggies", price: "$22.99" }}
        />
        <Meals
          id="m2"
          Add={Adding}
          obj={{
            meal: "Schnitzel",
            info: "A german speciality",
            price: "$16.55",
          }}
        />
        <Meals
          id="m3"
          Add={Adding}
          obj={{
            meal: "Dolma",
            info: "Delicious Azerbaijani food",
            price: "$20.99",
          }}
        />
        <Meals
          id="m4"
          Add={Adding}
          obj={{
            meal: "Nuggets",
            info: "Delicious American food",
            price: "$20.99",
          }}
        />
      </ul>
    </section>
  );
};

export default MealSection;
