import React, { useContext } from "react";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
      console.log(data)
        const contactInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        const contactPost = await axiosSecure.post('/contact', contactInfo).then(() => {
            reset()
            Swal.fire({
                icon: "success",
                title: "Message Sent Success",
                showConfirmButton: false,
                timer: 1500,
              });
        })
    }

  return (
    <div>
      <SectionHeading heading={"Contact Us"}></SectionHeading>

      <div className="w-1/4 mx-auto my-5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 ">
          <div>
            <div className="mb-2 block ">
              <Label value="Your Name" />
            </div>
            <TextInput
              {...register("name")}
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block ">
              <Label value="Your email" />
            </div>
            <TextInput
              {...register("email")}
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your Message" />
            </div>
            <Textarea
              {...register("message")}
              name="message"
              rows={"4"}
            ></Textarea>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
