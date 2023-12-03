import React from "react";
import Banner from "./Banner/Banner";
import HomePageBioDataSection from "../../shared/HomePageBioDataSection/HomePageBioDataSection";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="my-16">
        <HomePageBioDataSection preview></HomePageBioDataSection>
      </div>
      <div className="my-16">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
