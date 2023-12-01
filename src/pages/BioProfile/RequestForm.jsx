import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const RequestForm = ({ bio }) => {
  const { email } = bio;
    const axiosSecure = useAxiosSecure()
  //   React Hook Form's  useForm
  const { register, handleSubmit } = useForm();
  //   React Hook Form's  useForm

//   Logged User Data Start
    const {user} = useContext(AuthContext)
//   Logged User Data End

  const onSubmit = async (data) => {
    console.log(data)
    const requestItems = {
        senderName: data.senderName,
        senderEmail: data.sender_email,
        sender_profile: data.sender_profile,
        message: data.message,
        receiver_email: email
    }

    const requestres = await axiosSecure.post('/request', requestItems)
    if(requestres.data.insertedId){
        Swal.fire({
            icon: "success",
            title: "Request Send to this Bio Data Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
        {/* From Email */}
        <div>
          <div className="mb-2 block">
            <Label value="Your Name" />
          </div>
          <TextInput
          {...register("senderName", { required: true })}
          defaultValue={user.displayName || ''}
            name="senderName"
            type="text"
            placeholder='Enter Your Email Address'
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Your email" />
          </div>
          <TextInput
          {...register("sender_email", { required: true })}
          defaultValue={user.email || ''}
            name="sender_email"
            type="email"
            placeholder='Enter Your Email Address'
          />
        </div>

        {/* My Profile Link */}
        <div>
          <div className="mb-2 block">
            <Label value="Your Profile Link" />
          </div>
          <TextInput
          {...register("sender_profile", { required: true })}
            name="sender_profile"
            type="text"
            placeholder='Enter Your Bio Data Profile Link'
          />
        </div>

        {/* Message */}
        <div>
          <div className="mb-2 block">
            <Label value="Your Message" />
          </div>

          <Textarea
          {...register("message")}
            name="message"
            placeholder="Leave a comment..."
            rows={4}
          />
        </div>

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default RequestForm;
