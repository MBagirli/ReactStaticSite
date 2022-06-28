import HeaderCss from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  let Popup = (bool) => {
    props.popup(bool);
  };

  return (
    <header className={HeaderCss.header}>
      <h1 className={HeaderCss.header__description}>ReactMeals</h1>
      <CartButton popup={Popup} />
    </header>
  );
};

export default Header;
