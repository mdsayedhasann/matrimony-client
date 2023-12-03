import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from "sweetalert2"

const GoogleLogin = () => {
    const {users, googleLogin} = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            Swal.fire({
                title: "Login Success",
                text: "You can now find your soulmate here",
                icon: "success"
              });
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            
            <button onClick={handleGoogleLogin} className=' px-40 my-3 bg-gray-200 py-2 rounded-lg flex items-center justify-center gap-3'>
            <FaGoogle/>  Sign In Google 
            </button> 
            
        </div>
    );
};

export default GoogleLogin;