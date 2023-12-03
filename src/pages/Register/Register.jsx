import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const { user, createAccount, updateUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    reset,
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
    createAccount(data.email, data.password)
      .then((res) => {
        // Update Name and Photo
        updateUser(data.name, data.photoURL).then((res) => {
          const userInfo = {
            name: data.name,
            email: data.email,
            role: 'users'
          }
          axiosSecure.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              Swal.fire({
                icon: "success",
                title: `Hi!, Warmly welcome to our Matrimoni`,
                showConfirmButton: false,
              });
              navigate("/");
            }
          })

            console.log(res);
          })

          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
            <button className="bg-[#E00C44] py-2 text-white" type="submit">Register</button>
        </form>

        <div className="my-2">
          <p className="">
            Already have an account?
            <Link to={"/login"}>
              {" "}
              <span className="text-[#DF0C44]">Please Login </span>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
