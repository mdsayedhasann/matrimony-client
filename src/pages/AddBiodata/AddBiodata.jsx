import React, { useContext } from "react";
import { Button, Checkbox, Label, TextInput, Select, FileInput } from "flowbite-react";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'

const AddBiodata = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const onSubmit = async (data) =>{
       console.log(data)
       const imageFile = {image: data.image[0]}
       const res = await axiosSecure.post(image_hosting_api, imageFile, {
           headers: {
               'Content-type' : 'multipart/form-data'
           }
       })
       if(res.data.success){
           const bioData = {
               name: data.name,
               gender: data.gender,
               address: data.address,
               age: parseFloat(data.age),
               occupation: data.occupation,
                height: parseFloat(data.height),
                weight: parseFloat(data.weight),
                image: res.data.data.displayURL,
                status: 'pending'
           }
           const biores = await axiosSecure.post('/bioData', bioData)
           if(biores.data.insertedId){
               reset()
            Swal.fire({
                icon: "success",
                title: "Bio Data Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
           }
       }
       console.log(res.data);
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




          <div className="flex space-x-2">
            {/* Height Start */}
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label value="Height (in cm)" />
              </div>
              <TextInput
                {...register("height")}
                name="height"
                type="number"
                placeholder=""
                required
              />
            </div>

            {/* Height End */}

            {/* Weight Start */}
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label value="Weight (in cm)" />
              </div>
              <TextInput
                {...register("weight")}
                name="weight"
                type="number"
                placeholder=""
                required
              />
            </div>
            {/* Weight End */}
          </div>








          {/* Image Start */}
          <div>
            <div>
              <div className="mb-2 block">
                <Label value="Upload Your Image" />
              </div>
              <FileInput {...register("image")} name="image" />
            </div>
          </div>

          {/* Image End */}

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddBiodata;
