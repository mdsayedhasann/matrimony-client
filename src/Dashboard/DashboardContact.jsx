import useContact from "../hooks/useContact";
import { Table } from "flowbite-react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";

const DashboardContact = () => {
  const [contact, refetch, loading] = useContact();

  return (
    <div>
      <SectionHeading heading={"Contact Requests"}></SectionHeading>
      {contact.length}

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Sender Name</Table.HeadCell>
          <Table.HeadCell>Sender Email</Table.HeadCell>
          <Table.HeadCell>Message</Table.HeadCell>
        </Table.Head>
        {contact.map((user, index) => (
          <>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                    {
                        user.message
                    }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </>
        ))}
      </Table>
    </div>
  );
};

export default DashboardContact;
