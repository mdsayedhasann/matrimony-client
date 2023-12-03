import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import logo from "../../src/assets/images/logo.png";
import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const DashboardSidebar = () => {
  const [users] = useUsers();
  const { user, signoutUser } = useContext(AuthContext);
  const admin = users.find(
    (admin) => admin.role === "admin" && admin.fbid === user.uid
  );

  // Signout From Dashboard
  const handleSignOut = () => {
    signoutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with logo branding example">
        <div className="w-36">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/" icon={HiChartPie}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/addbiodata" icon={HiViewBoards}>
              Add Bio Data
            </Sidebar.Item>
            {admin ? (
              <>
                <Sidebar.Item href="/dashboard/actionbiodata" icon={HiInbox}>
                  Viwe Bios
                </Sidebar.Item>
              </>
            ) : (
              ""
            )}

            <Sidebar.Item href="/dashboard/receive_request" icon={HiInbox}>
              My Received Request
            </Sidebar.Item>

            {admin && (
              <>
                <Sidebar.Item href="/dashboard/users" icon={HiUser}>
                  Users
                </Sidebar.Item>
              </>
            )}

            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Contacts Request
            </Sidebar.Item>
            <Sidebar.Item href="/register" icon={HiTable}>
              <button onClick={handleSignOut}>Sign Out</button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
