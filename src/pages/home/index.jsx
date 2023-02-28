import React from "react";

import HeroSection from "../../components/ui/herosection";
import Card from "../../components/features/card";
import WorksCard from "../../components/features/works-cards";
import About from "../../components/ui/about";
import ProfessionalCards from "../../components/features/professional-cards";
import ShopCards from "../../components/features/shop-cards";
import TeamCard from "../../components/features/team-cards";
import Action from "../../components/features/action";
import OurPartner from "../../components/features/our-partner";

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
