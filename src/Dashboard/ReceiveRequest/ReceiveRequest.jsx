import React, { useContext } from "react";
import { Table } from "flowbite-react";
import useReceivedRequest from "../../hooks/useReceivedRequest";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ReceiveRequest = () => {
  const [receivedRequest] = useReceivedRequest();
  const { user } = useContext(AuthContext);

  const my_received_request = receivedRequest.filter(
    (req) => req.receiver_email === user.email
  );
  return (
    <div>
      <SectionHeading
        heading={"My Received Request"}
        content={
          "Here Are The Request of whom, who choose my Bio and Ask for query"
        }
      ></SectionHeading>
      <h1 className="text-xl font-bold">
        Total Received Request:
        {my_received_request.length}
      </h1>
      {/* {receivedRequest.map((req) => (
            
        ))} */}
      {/*  */}
      {/*  */}
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Sender Name</Table.HeadCell>
          <Table.HeadCell>Sender Email</Table.HeadCell>
          <Table.HeadCell>Sender Profile</Table.HeadCell>
          <Table.HeadCell>Message</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        {receivedRequest.map((req) => (
          <Table.Body key={req._id} className="divide-y">
            <Table.Cell> {req.senderName} </Table.Cell>
            <Table.Cell>{req.senderEmail}</Table.Cell>
            <Table.Cell>
              {" "}
              <button className="bg-blue-200 px-3 py-2 rounded-md"> <Link to={`${req.sender_profile}`}>Viwe Profile  </Link> </button>{" "}
            </Table.Cell>
        
            <Table.Cell>{req.message.slice(0,30)}</Table.Cell>

            {/* Action  */}
            <Table.Cell>
                <button className="bg-green-600 text-white px-3 py-2 ">Approve</button>
                <button className="bg-red-600 text-white px-3 py-2 mx-2">Delete</button>
            </Table.Cell>
          </Table.Body>

        
        ))}
      </Table>{" "}
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
};

export default ReceiveRequest;
