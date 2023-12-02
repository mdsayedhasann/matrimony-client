import React from "react";
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Link } from "react-router-dom";


const SidebarCard = ({ bio }) => {
  const { _id, name, gender, age, occupation, status, isPremium, image } = bio;
  return (
    <div className=" rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 my-3 p-4">

        <div className="flex justify-center ">
        <h3 className="text-xl font-bold">
            {name}
        </h3>
        </div>
      <div className="flex items-center p-3  gap-5">
          <div className="w-1/3">
              <img src={image} alt="" />
          </div>

          <div className="flex gap-3 flex-1">
            <p>Gerder: {gender}</p>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
      </div>
        <Link to={`/profile/${_id}`}>
      <Button gradientDuoTone="greenToBlue">Profile</Button>
        </Link>
    </div>
  );
};

export default SidebarCard;
