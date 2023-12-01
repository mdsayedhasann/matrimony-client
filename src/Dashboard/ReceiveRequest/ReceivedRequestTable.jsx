import React from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ReceivedRequestTable = ({req}) => {
    return (
        <div>
            <Table striped>
            <Table.Head>
              <Table.HeadCell>Sender Name</Table.HeadCell>
              <Table.HeadCell>Sender Email</Table.HeadCell>
              <Table.HeadCell>Sender Profile</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">

                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>{req.senderEmail}</Table.Cell>
                  <Table.Cell> <Link to={`/profile/${req._id}`}> <button className=''> Viwe Profile </button> </Link>  </Table.Cell>

        
            </Table.Body>
          </Table>
        </div>
    );
};

export default ReceivedRequestTable;