import HeroSectionCss from "./HeroSection.module.css";
import MainText from "./MainText";

const HeroSection = () => {
  return (
    <section className={HeroSectionCss.container}>
      <div className={HeroSectionCss.container__picture}></div>
      <MainText />
    </section>
  );
};

export default HeroSection;
