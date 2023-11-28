import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Register = () => {
   const { user, createAccount } = useContext(AuthContext);

  
  const {
    register, handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    reset
  } = useForm();
  const handleRegister = (data) => {
      console.log(data)
        createAccount(data.email, data.password)
        .then(res => {
            reset()
            // Sweet Alert Start
            Swal.fire({
                icon: "success",
                title: `Hi! ${data.name}, Warmly welcome to our Matrimoni`,
                showConfirmButton: false,
              });
            // Sweet Alert End
            console.log(res)
        })
        .catch(error => console.error(error))
}
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex max-w-md flex-col gap-4"
        >
          {/* Name */}
          <div>
            <div className="mb-2 block">
              <Label value="Your Name" />
            </div>
            <TextInput
             {...register("name", { required: true })} 
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <div className="mb-2 block">
              <Label value="Your email" />
            </div>
            <TextInput
              {...register("email", { required: true })} 
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* PhotoUrl */}
          <div>
            <div className="mb-2 block">
              <Label value="Your Photo" />
            </div>
            <TextInput
              {...register("photoURL", { required: true })} 
              type="text"
              name="photoURL"
              placeholder="Enter Your Photo Url"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput
              {...register("password", { required: true })} 
              type="password"
              name="password"
              placeholder="Type Password Here"
              required
            />
          </div>

          <TextInput type="submit" value="Register" className="bg-red-500" />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
