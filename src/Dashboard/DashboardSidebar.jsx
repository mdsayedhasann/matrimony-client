import React from "react";
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
import logo from '../../src/assets/images/logo.png'
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with logo branding example">
        
        <div className="w-36">
          <Link to='/'><img src={logo} alt="" /></Link>
        
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/addbiodata" icon={HiViewBoards}>
              Add Bio Data
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/actionbiodata" icon={HiInbox}>
              Viwe Bios
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/register" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
