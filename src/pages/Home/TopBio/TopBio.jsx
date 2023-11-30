import React from "react";
import { Card } from "flowbite-react";
import './TopBio.css'
const TopBio = ({bio}) => {
    const {name, age, gender, image, address, occupation, _id} = bio
  return (
    <div>
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10 w-full mx-auto">
          <img
            alt="Bonnie image"
            height="96"
            src={image}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
            <div className="p-3 text-center">
                <p className="text-md">
                Bio Data Id: <br />
                 {_id}
                </p>
            </div>

          <table>
              <tr>
                  <td>Gender</td>
                  <td className="text-right">{gender}</td>
              </tr>
              <tr>
                  <td>Age</td>
                  <td className="text-right">{age}</td>
              </tr>
              <tr>
                  <td>Occupation</td>
                  <td className="text-right">{occupation}</td>
              </tr>
              <tr>
                  <td>District</td>
                  <td className="text-right">{address}</td>
              </tr>
          </table>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Vier Profile
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopBio;
