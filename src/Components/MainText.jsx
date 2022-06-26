import MainTextCss from "./MainText.module.css";

const MainText = () => {
  return (
    <div className={MainTextCss.container}>
      <h2 className={MainTextCss.container__h2}>
        Delicious Food, Delivered To You
      </h2>
      <p className={MainTextCss.container__p}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p className={MainTextCss.container__p}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default MainText;
