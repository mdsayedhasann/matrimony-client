import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        
    }
  return (
    <div>
      <div>
      <form onSubmit={handleRegister} className="flex max-w-md flex-col gap-4">
          {/* Name */}
        <div>
          <div className="mb-2 block">
            <Label value="Your Name" />
          </div>
          <TextInput
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
            type="text"
            name="photo"
            placeholder="Enter Your Photo Url"
            required
          />
        </div>

        {/* Password */}
        <div>
          <div className="mb-2 block">
            <Label value="Your password" />
          </div>
          <TextInput type="password" name="password" placeholder="Type Password Here" required />
        </div>

        <TextInput type="submit" value='Register' className="bg-red-500"/>
      </form>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Register;
