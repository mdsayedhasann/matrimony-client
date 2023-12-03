import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/images/logo.png'
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsers from "../../hooks/useUsers";

const Nav = () => {
  const {user, signoutUser} = useContext(AuthContext)
  const [users] = useUsers()
  const admin = users.filter(admin => admin.role ==='admin')
  const handleSignOut = () => {
    signoutUser()
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Logout Success",
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div>
      <Navbar className="max-w-7xl mx-auto">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="w-48"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        {user && <>
          <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user?.photoURL}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            {
              admin && <>
             
               <Dropdown.Item href="/dashboard">Dashboard </Dropdown.Item>
              <Dropdown.Item href="/dashboard/addbiodata">Add My Bio Data</Dropdown.Item>
              </>
            }
            {/* <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
            <Dropdown.Item href="/dashboard/addbiodata">Add My Bio Data</Dropdown.Item> */}
            <Dropdown.Item href="/dashboard/actionbiodata">My Received Bio Data</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        </>}
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/checking">Checking</Navbar.Link>
          <Navbar.Link href="/biodata">Biodatas</Navbar.Link>
          <Navbar.Link href="/aboutus">About Us</Navbar.Link>
          <Navbar.Link href="#">Contact Us </Navbar.Link>
          {
            !user && <Navbar.Link href="/login">Login</Navbar.Link>
          }

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
