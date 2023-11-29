import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
      <div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="my-2">
           <p className="">
           Already have an account? 
           <Link to={'/register'}> <span className="text-[#DF0C44]">Please Login </span>  </Link>
           </p>
        </div>
      </div>
      <div>

      </div>
    </div>
    );
};

export default Login;