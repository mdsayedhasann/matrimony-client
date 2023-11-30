import React from "react";
import Banner from "./Banner/Banner";
import HomePageBioDataSection from "../../shared/HomePageBioDataSection/HomePageBioDataSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="my-16">
        <HomePageBioDataSection></HomePageBioDataSection>
      </div>
    </div>
  );
};

export default Home;
