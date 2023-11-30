import React from "react";
import { Table } from "flowbite-react";

const BioProfileTable = ({ bio }) => {
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
    <div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Age
            </Table.Cell>
            <Table.Cell>{age}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Gender
            </Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Occupation
            </Table.Cell>
            <Table.Cell>{occupation}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Height
            </Table.Cell>
            <Table.Cell>{height} cm</Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Weight{" "}
            </Table.Cell>
            <Table.Cell>{weight} kg</Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Present Address
            </Table.Cell>
            <Table.Cell>{present_address}</Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Permanent Address
            </Table.Cell>
            <Table.Cell>{address}</Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Father's Name
            </Table.Cell>
            <Table.Cell>{father} </Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Mother's Name
            </Table.Cell>
            <Table.Cell>{mother} </Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Expected Partner Age
            </Table.Cell>
            <Table.Cell>{expected_age} </Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Expected Partner Height
            </Table.Cell>
            <Table.Cell>{expected_height} </Table.Cell>
          </Table.Row>


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Expected Partner Weight
            </Table.Cell>
            <Table.Cell>{expected_weight} </Table.Cell>
          </Table.Row>





        </Table.Body>
      </Table>
    </div>
  );
};

export default BioProfileTable;
