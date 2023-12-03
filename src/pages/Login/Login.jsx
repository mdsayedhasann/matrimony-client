import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import GoogleLogin from "../../shared/GoogleLogin/GoogleLogin";

const Login = () => {
    const {user, singinUser } = useContext(AuthContext)
    const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
      console.log(data)
      singinUser(data.email, data.password)
      .then(res => {
        // Navigate to homepage
        navigate('/')

        // Sweet ALert
        Swal.fire({
            icon: "success",
            title: `Hi!, Find your soulmate and Invite us`,
            showConfirmButton: false,
          });
      })
      .catch(error => {
          console.error(error);
          alert('Wrong Username and Password')
      })
    }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
            {...register("email", { required: true })}
            name="email"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput {...register("password", { required: true })} name="password" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <GoogleLogin></GoogleLogin>
        <div className="my-2">
          <p className="">
            Already have an account?
            <Link to={"/register"}>
              {" "}
              <span className="text-[#DF0C44]">Please Register </span>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
