import React from "react";
import Banner from "./Banner/Banner";
import HomePageBioDataSection from "../../shared/HomePageBioDataSection/HomePageBioDataSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="my-16">
        <HomePageBioDataSection preview></HomePageBioDataSection>
      </div>
    </div>
  );
};

export default Home;
