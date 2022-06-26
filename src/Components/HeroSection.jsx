import React from "react";
import HeroSectionCss from "./HeroSection.module.css";
import MainText from "./MainText";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className={HeroSectionCss.container}>
        <div className={HeroSectionCss.container__picture}></div>
        <MainText />
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
