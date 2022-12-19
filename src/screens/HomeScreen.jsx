import React from "react";

import Caroseulslider from "../components/Caroseulslider";
import { Navbar } from "../components/Navbar";
import { bannerimages, searchcardimages } from "../components/Images4Banner.js";
import { WhyChoose } from "../components/WhyChoose";
import ExProp from "../components/ExProp";
import SearchCard from "../components/SearchCard.jsx";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Caroseulslider images={bannerimages} />
      <WhyChoose />
      <ExProp />
    </>
  );
};
