import React from "react";
import useUsers from "../hooks/useUsers";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { Table } from "flowbite-react";

const DashboardUsers = () => {
  const [users] = useUsers();
  // const allUsers = users.map(user => )
  return (
    <div>
      <SectionHeading heading={"All Users"}></SectionHeading>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {users.map((user, index) => (
          <>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index}
                </Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>$99</Table.Cell>
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
          </>
        ))}
      </Table>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
};

export default DashboardUsers;
