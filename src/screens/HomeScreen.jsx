import React from "react";

import Caroseulslider from "../components/Caroseulslider";
import { Navbar } from "../components/Navbar";
import { bannerimages } from "../components/Images4Banner.js";
import { WhyChoose } from "../components/WhyChoose";
import SearchCard from "../components/SearchCard"
import ExProp from "../components/ExProp";


export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Caroseulslider images={bannerimages} />
      <WhyChoose />
      <ExProp />
      <SearchCard heading="Search by cities/localities"  info={searchcardimages}/>
      <SearchCard  heading="Search by property type" info={searchcardimages}/>
    </>
  );
};
