import React from "react";

import HeroSection from "../HeroSection";
import Section from "../Section";
import Card from "../Card";
import WorksCard from "../WorksCards";

import { FiLayers } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { GiLifeJacket } from "react-icons/gi";
import { FaPalette } from "react-icons/fa";

import "./index.css";

const CardItems = [
  {
    name: "quality material",
    date: "1 feb 2023",
    icon: <FaPalette />,
  },
  {
    name: "quality material",
    date: "5 feb 2023",
    icon: <CiFaceSmile />,
  },
  {
    name: "quality material",
    date: "13 feb 2023",
    icon: <GiLifeJacket />,
  },
  {
    name: "quality material",
    date: "16 feb 2023",
    icon: <FiLayers />,
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Section color="gray">
        {CardItems.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            icon={item.icon}
            date={item.date}
          />
        ))}
      </Section>

      <Section color="black">
        <WorksCard />
      </Section>
    </>
  );
};

export default HomePage;
