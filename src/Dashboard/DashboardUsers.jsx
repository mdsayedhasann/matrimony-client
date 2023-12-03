import React from "react";
import useUsers from "../hooks/useUsers";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { Table } from "flowbite-react";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const DashboardUsers = () => {
  const [users, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();

  const handleDeleteUser = (item) => {
    console.log(item.name);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/users/${item._id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "This Users is deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleAdmin = (item) => {
    console.log(item.name);
    axiosSecure.patch(`/users/admin/${item._id}`);
  };
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
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        {users.map((user, index) => (
          <>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="p-2 bg-red-600 text-white rounded-md"
                  >
                    <FaTrash></FaTrash>
                  </button>
                  {user.role === "admin" ? (
                    <>
                      <button disabled className="bg-green-500 p-2 mx-3 text-white rounded-lg">Already an Admin</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAdmin(user)}
                        className="bg-blue-500 p-2 mx-3 text-white rounded-lg"
                      >
                        Make Admin
                      </button>
                    </>
                  )}
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
