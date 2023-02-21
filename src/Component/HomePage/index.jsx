import React from "react";

import { FiLayers } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { GiLifeJacket } from "react-icons/gi";
import { FaPalette } from "react-icons/fa";

import HeroSection from "../HeroSection";
import Section from "../Section";
import Card from "../Card";
import WorksCard from "../WorksCards";
import FeatureHeading from "../FeatureHeading";
import About from "../About";
import ProfessionalCards from "../ProfessionalCards";
import ShopCards from "../ShopCards";
import TeamCard from "../TeamCard";
import Action from "../Action";

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

const ProfessionalCardItems = [
  {
    image: "/Images/mbr.jpg",
    title: "Quality Material",
    text: "Lorem ipsum dolor sit amet",
    buttonName: "Read More",
  },
  {
    image: "/Images/mbr-1.jpg",
    title: "High Proint Quality",
    text: "Lorem ipsum dolor sit amet",
    buttonName: "Read More",
  },
  {
    image: "/Images/mbr (1).jpeg",
    title: "Good Reviews",
    text: "Lorem ipsum dolor sit amet",
    buttonName: "Read More",
  },
];

const ShopCard = [
  {
    image: "/Images/mbr-1.jpg",
    title: "t-shirt with print",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies metus et nibh gravida, eu imperdiet ante egestas.Duis ornare lobortis ante, eget eleifend sapien dictum ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    price: "$29",
  },
  {
    image: "/Images/mbr (1).jpeg",
    title: "t-shirt with slogan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies metus et nibh gravida, eu imperdiet ante egestas.Duis ornare lobortis ante, eget eleifend sapien dictum ut.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    price: "$49",
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Section background="primary" color="primary" width="all">
        <FeatureHeading
          feature="our feature"
          heading="black"
          font="smallfont"
          border="bordertop"
          margin="marginbottom"
        />
        {CardItems.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            icon={item.icon}
            date={item.date}
          />
        ))}
      </Section>

      <Section background="primary" color="black" width="all">
        <FeatureHeading
          feature="How it works?"
          heading="white"
          font="bigfont"
          border="bordernon"
          margin="marginbottom"
        />
        <WorksCard />
      </Section>

      <Section background="primary" color="primary" width="about">
        <About heading="about us" display="grid" text="about" />
      </Section>

      <Section background="primary" color="primary" width="all">
        <FeatureHeading
          feature="Professional Tools"
          heading="black"
          font="bigfont"
          border="bordernon"
          margin="marginbottom"
        />
        {ProfessionalCardItems.map((card, index) => (
          <ProfessionalCards
            key={index}
            images={card.image}
            title={card.title}
            text={card.text}
            button={card.buttonName}
          />
        ))}
      </Section>

      <Section background="primary" color="primary" width="about">
        <About heading="our shop" display="flex" text="ourshop" />
      </Section>

      <Section width="all">
        {ShopCard.map((shop, index) => (
          <ShopCards
            key={index}
            image={shop.image}
            title={shop.title}
            description={shop.description}
            price={shop.price}
          />
        ))}
      </Section>

      <Section width="all">
        <FeatureHeading
          feature="Our Team"
          heading="black"
          font="bigfont"
          border="bordernon"
          margin="marginnon"
        />
        <p className="teams">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <TeamCard />
      </Section>
      <Section background="green">
        <FeatureHeading
          feature="View in Action"
          heading="white"
          font="biggerfont"
          border="bordernon"
        />
        <Action />
      </Section>
    </>
  );
};

export default HomePage;
