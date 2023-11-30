import React from "react";
import { Table } from "flowbite-react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import useBioData from "../hooks/useBioData";

const ActionBioData = () => {
  const [bioData] = useBioData();
  // const
  return (
    <div>
      <SectionHeading heading={"All Bio Data"}></SectionHeading>

      {/* All Bio Data Table are here */}
      <div>
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Gender</Table.HeadCell>
              <Table.HeadCell>Age</Table.HeadCell>
              <Table.HeadCell>Occupation</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {bioData.map((bio) => (
                <Table.Row
                  key={bio._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="">
                    <img src={bio.photoURL} alt="" />
                  </Table.Cell>
                  <Table.Cell>{bio.name}</Table.Cell>
                  <Table.Cell>{bio.gender}</Table.Cell>
                  <Table.Cell>{bio.age}</Table.Cell>
                  <Table.Cell>{bio.occupation}</Table.Cell>

                  <Table.Cell>
                    {bio.status === "pending" ? (
                      <>
                        <p className="bg-orange-400 text-center p-[1px] text-white font-bold"> {bio.status} </p>{" "}
                      </>
                    ) : (
                      <>
                        <p className="bg-green-400 text-center p-[1px] text-white font-bold"> {bio.status} </p>{" "}
                      </>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <button className="bg-blue-600 p-2 m-2 text-white">
                      Update
                    </button>
                    <button className="bg-red-600 p-2 m-2 text-white">
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}

              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ActionBioData;
