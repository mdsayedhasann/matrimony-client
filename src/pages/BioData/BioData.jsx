import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import useBioData from "../../hooks/useBioData";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import TopBio from "../Home/TopBio/TopBio";
const BioData = () => {
  const [bioData] = useBioData();
    const [displayBio, setDisplayBio] = useState(null)

    const handleBioFilter = filter => {
         if(filter === 'all'){
            setDisplayBio(bioData)
        }else if (filter === '18to24') {
            const age18to25 = bioData.filter((bio) => bio.age >= 18 && bio.age <= 26)
            setDisplayBio(age18to25)
        }else if (filter === '24to30'){
            const age24to30 = bioData.filter((bio) => bio.age >= 25 && bio.age <= 30)
            setDisplayBio(age24to30)

        }else if(filter === '30to35'){
            const age30to35 = bioData.filter(bio => bio.age >=30 && bio.age <= 35)
            setDisplayBio(age30to35)
        }else if(filter === '35to45'){
            const age35to45 = bioData.filter(bio => bio.age >= 35 && bio.age <= 45)
            setDisplayBio(age35to45)
        }else if(filter === '45to60'){
            const age45to60 = bioData.filter(bio => bio.age >= 45 && bio.age <= 60)
            setDisplayBio(age45to60)
        }
        else if(filter === '60+'){
            const age60Over = bioData.filter(bio => bio.age >60)
                setDisplayBio(age60Over)
        }else if(filter === 'male'){
            const male = ( bioData || displayBio).filter(bio => bio.gender === 'male')
            setDisplayBio(male)
        }else if(filter === 'female'){
            const female = (bioData || displayBio).filter(bio => bio.gender === 'female')
            setDisplayBio(female)
        }
    }
  return (
    <div>
      <div className="flex gap-5">
        {/* SideBar Start */}
        <div className="w-[25%] bg-slate-100 p-4">
          <h2 className="text-center text-xl font-bold">Filter By Age</h2>
          <div className="my-1 flex justify-center">
            <Dropdown label="Filter Age Limit">
              <Dropdown.Item onClick={() => handleBioFilter('all')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('18to24')}>18-24</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('24to30')}>24-30</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('30to35')}>30-35</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('35to45')}>35-45</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('45to60')}>45-60</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('60+')}>60+</Dropdown.Item>
            </Dropdown>
          </div>

          <h2 className="text-center text-xl font-bold mt-6">Filter By Job</h2>
          <div className="my-1 flex justify-center">
            <Dropdown label="Filter Age Limit">
              <Dropdown.Item onClick={() => handleBioFilter('all')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('male')}>Male</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBioFilter('female')}>Female</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        {/* SideBar End */}

        <div className="w-[75%] p-4 bg-slate-50">
          <SectionHeading heading={"Filter Your Bio"}></SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-3">
            {(displayBio || bioData).map((bio) => (
              <TopBio key={bio._id} bio={bio}></TopBio>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
