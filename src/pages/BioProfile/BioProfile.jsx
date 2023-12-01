import React from "react";
import { useLoaderData } from "react-router-dom";
import img1 from '../../assets/images/slider/s1.png'
import { Table } from 'flowbite-react';
import BioProfileTable from "./BioProfileTable";
import BioProfileSidebar from "./BioProfileSidebar";
const BioProfile = () => {
  const bio = useLoaderData();
  const {
    _id,
    name,
    gender,
    address,
    present_address,
    age,
    occupation,
    height,
    weight,
    email,
    phone,
    father,
    mother,
    expected_age,
    expected_height,
    expected_weight,
    status,
    isPremium,
  } = bio;
  return (
    <div className="flex gap-8">
      {/* Content Area Start */}
      <div className="col-span-8 w-full md:w-3/4 ">
          <img className="w-full" src={img1} alt="" />
          <h2 className="text-3xl font-bold my-3">
              Name: {name}
          </h2>

          <BioProfileTable bio={bio}></BioProfileTable>
      </div>
      {/* Content Area End */}

      {/* Sidebar Area Start */}
      <div className="col-span-4 w-full md:w-1/4">
          <BioProfileSidebar></BioProfileSidebar>
      </div>
      {/* Sidebar Area End */}
    </div>
  );
};

export default BioProfile;
