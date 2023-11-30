import React from "react";
import { Table } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


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

      {/* Request Form Start */}
      <div className="my-5 mx-2">
        <Dropdown label="Contact" placement="right" className="w-[400px] px-10 py-10">
        <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
        </Dropdown>
      </div>
      {/* Request Form End */}
    </div>
  );
};

export default BioProfileTable;
