import React from "react";
import { Table } from "flowbite-react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import useBioData from "../hooks/useBioData";
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ActionBioData = () => {
  const [bioData, , refetch] = useBioData();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    //
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
        await axiosSecure.delete(`/bioData/${item._id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
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
                  <Table.Cell>
                    <div >
                      <img className="rounded-lg" src={bio.image} alt="" />
                    </div>
                  </Table.Cell>
                  <Table.Cell>{bio.name}</Table.Cell>
                  <Table.Cell>{bio.gender}</Table.Cell>
                  <Table.Cell>{bio.age}</Table.Cell>
                  <Table.Cell>{bio.occupation}</Table.Cell>
                  <Table.Cell>{bio.email}</Table.Cell>
                  <Table.Cell>{bio.phone}</Table.Cell>

                  <Table.Cell>
                    {bio.status === "pending" ? (
                      <>
                        <p className="bg-orange-200 text-center p-[1px] text-black font-bold">
                          {" "}
                          {bio.status}{" "}
                        </p>{" "}
                      </>
                    ) : bio.status === "success" ? (
                      <>
                        <p className="bg-green-200 text-center p-[1px] text-black font-bold">
                          {" "}
                          {bio.status}{" "}
                        </p>{" "}
                      </>
                    ) : null}
                  </Table.Cell>
                  <Table.Cell>
                    <button className="bg-blue-600 p-2 m-2 rounded rounded-md text-white">
                      <FaPencil />
                    </button>
                    <button
                      onClick={() => handleDelete(bio)}
                      className="bg-red-600 p-2 m-2  rounded rounded-md text-white"
                    >
                      <FaTrashCan />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ActionBioData;
