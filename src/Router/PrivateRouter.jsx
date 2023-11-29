import React, { useContext } from "react";
import { Spinner } from "flowbite-react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import {Navigate} from 'react-router'

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if(loading) {
    return <>
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    </>;
  }
  if (user) {
    return children
  }else{

      return <Navigate to='/login' state={{from: location}} replace></Navigate>
  }


//   return <Navigate to='/login' state={{from: location}} replace></Navigate>
}
export default PrivateRouter;
