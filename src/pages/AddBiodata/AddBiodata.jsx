import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput, Select, FileInput } from "flowbite-react";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const AddBiodata = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
       console.log(data)
    }
  return (
    <div className="">
      <div className="">
        <div>
          <SectionHeading
            heading={"Add Own Bio Data"}
            content={"Add own bio data here"}
          ></SectionHeading>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-1/3 mx-auto flex-col gap-4"
        >
          {/* Name */}
          <div>
            <div className="mb-2 block">
              <Label value="Your Name" />
            </div>
            <TextInput
              {...register("name")}
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder=""
              required
            />
          </div>

          {/* Gender Start */}
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select your Gender" />
            </div>
            <Select {...register("gender")} required>
              <option selected disabled>
                --- Select One ---
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </div>
          {/* Gender End */}

          {/* Permanent Address Start */}
          <div>
            <div className="mb-2 block">
              <Label value="Permanent Address" />
            </div>
            <TextInput
              {...register("address")}
              name="address"
              type="text"
              placeholder=""
              required
            />
          </div>

          {/* Permanent Address End */}

          <div className="flex space-x-2">
            {/* Age Start */}
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label value="Age" />
              </div>
              <TextInput
                {...register("age")}
                name="age"
                type="number"
                placeholder=""
                required
              />
            </div>

            {/* Age End */}

            {/* Occupation Start */}
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label value="Occupation" />
              </div>
              <TextInput
                {...register("occupation")}
                name="occupation"
                type="text"
                placeholder=""
                required
              />
            </div>

            {/* Occupation End */}
          </div>

          {/* Occupation Start */}
          <div>
            <div>
              <div className="mb-2 block">
                <Label value="Upload Your Image" />
              </div>
              <FileInput {...register("image")} name="image" />
            </div>
          </div>

          {/* Occupation End */}

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddBiodata;
