import React from "react";
import { Accordion } from "flowbite-react";
import faq from "../../../assets/images/others/faq.jpg";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

const Faq = () => {
  return (
    <div>
      <SectionHeading
        heading={"Freequently Asked Question"}
        content={"Here are some answer of question which "}
      ></SectionHeading>
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <img className="rounded-lg" src={faq} alt="" />
        </div>
        <div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                How does your matching algorithm work?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Our website employs a sophisticated algorithm that considers
                  various parameters like interests, values, backgrounds, and
                  preferences to suggest compatible matches. We use a mix of
                  user-provided information and behavioral data to ensure better
                  matchmaking.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is my personal information secure on your platform?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, ensuring the security and confidentiality of our users'
                  data is our top priority. We use the latest encryption methods
                  and adhere to strict privacy policies to safeguard all
                  personal information provided on our platform.
                </p>
                
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              Can I control who views my profile?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Absolutely. You have complete control over who can view your profile. You can set privacy preferences to make your profile visible only to matches that meet your specified criteria.
                </p>

              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
