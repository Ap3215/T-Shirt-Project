import React from "react";

import HeroSection from "../../Component/ui/herosection";

import Card from "../../Component/card";
import WorksCard from "../../Component/workscards";
import About from "../../Component/ui/about";
import ProfessionalCards from "../../Component/professionalcards";
import ShopCards from "../../Component/shopcards";
import TeamCard from "../../Component/teamcards";
import Action from "../../Component/action";
import OurPartner from "../../Component/ourpartner";

import "./index.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Card />
      <WorksCard />
      <About heading="about us" display="grid" text="about" />
      <ProfessionalCards />
      <About heading="our shop" display="flex" text="ourshop" />
      <ShopCards />
      <TeamCard />
      <Action />
      <OurPartner />
    </>
  );
};

export default HomePage;
