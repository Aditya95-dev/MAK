import AboutCombined from "../components/AboutCombined";
import AboutHero from "../components/AboutHero";
import AboutInfo from "../components/AboutInfo";
import React from "react";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutInfo/>
      <AboutCombined/>
      <WhatMakesUsDifferent/>
      
    </>
  );
};

export default About;
