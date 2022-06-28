import HeaderCss from "./Header.module.css";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className={HeaderCss.header}>
      <h1 className={HeaderCss.header__description}>ReactMeals</h1>
      <CartButton />
    </header>
  );
};

export default Header;
