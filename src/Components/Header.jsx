import HeaderCss from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  let ClickHandler = () => {
    props.Click();
  };

  return (
    <header className={HeaderCss.header}>
      <h1 className={HeaderCss.header__description}>ReactMeals</h1>
      <CartButton Click={ClickHandler} />
    </header>
  );
};

export default Header;
