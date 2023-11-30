import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useBioData from "../hooks/useBioData";
import SectionHeading from "../shared/SectionHeading/SectionHeading";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [bioData] = useBioData();
  console.log(bioData);

  //   const handleBioFilter = filter => {
  //       if(filter === 'male'){
  //           const maleTotal = bioData.filter(bio => bio.gender === 'male')
  //       }
  //   }

  const totalPremium = bioData.filter((bio) => bio.isPremium === true);
  const totalSuccess = bioData.filter((bio) => bio.status === "success");
  const totalMale = bioData.filter((bio) => bio.gender === "male");
  const totalFemale = bioData.filter((bio) => bio.gender === "female");
  const age18to25 = bioData.filter((bio) => bio.age >= 18 && bio.age <= 25);
  const age16to30 = bioData.filter((bio) => bio.age >= 26 && bio.age <= 30);
  const age31to45 = bioData.filter((bio) => bio.age >= 31 && bio.age <= 45);
  const age45over = bioData.filter((bio) => bio.age >= 45);
  return (
    <div>
      <div>
        <h1 className="text-7xl">
          Hi! {user.displayName}, <br />
          <span className="text-3xl">Warmly Welcome To the Dashboard</span>
        </h1>
      </div>

      {/* Total Premium Members */}
      <div className="flex text-start mt-8s">
        <SectionHeading heading={"Total Success Couple"}></SectionHeading>
      </div>
      <div className="flex my-3 gap-5">
        <div className="p-7 bg-gradient-to-r from-green-100 to-gray-50 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            Total Success Story
            <span>{totalSuccess.length}</span>
          </h2>
        </div>
      </div>
      {/* Total Success */}
      <div className="flex text-start mt-8s">
        <SectionHeading heading={"Total Premium Taker"}></SectionHeading>
      </div>
      <div className="flex my-3 gap-5">
        <div className="bg-green-50 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            Total Premium Members Story
            <span>{totalPremium.length}</span>
          </h2>
        </div>
      </div>

      {/* Total */}
      <div className="flex text-start mt-8s">
        <SectionHeading heading={"Total Bio Datas"}></SectionHeading>
      </div>
      <div className="flex my-3 gap-5">
        <div className="bg-blue-50 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            Total Biodata
            <span>{bioData.length}</span>
          </h2>
        </div>

        <div className="bg-yellow-50 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            Male Biodata
            <span>{totalMale.length}</span>
          </h2>
        </div>
        <div className="bg-violet-100 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            Female Biodata
            <span>{totalFemale.length}</span>
          </h2>
        </div>
      </div>

      {/* Age Filtering */}
      <div className="flex text-start mt-8s">
        <SectionHeading heading={"Age Limit"}></SectionHeading>
      </div>
      <div className="flex my-3 gap-5">
        <div className="bg-blue-100 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            18 to 25
            <span>{age18to25.length}</span>
          </h2>
        </div>

        <div className="bg-green-100 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            25 to 30
            <span>{age16to30.length}</span>
          </h2>
        </div>
        <div className="bg-orange-100 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            30 to 45
            <span>{age31to45.length}</span>
          </h2>
        </div>
        <div className="bg-red-100 p-7 rounded rounded-lg">
          <h2 className="text-3xl font-bold flex flex-col justify-center items-center gap-6">
            45 and Over
            <span>{age45over.length}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
