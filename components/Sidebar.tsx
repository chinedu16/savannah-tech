// components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname.includes(pathname);
  };

  const logoutApp = () => {
    router.push("/");
  };
  const linkItems = [
    { path: "/dashboard", text: "Dashboard", icon: <DashboardIcon /> },
    {
      path: "/todo",
      text: "Todo",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <aside className="relative w-64  bg-gray-100 text-white hidden lg:block">
      {/* Logo */}
      <div className="flex p-4">
        {/* <Link href={"/user"}>
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={100}
            className="h-20 w-40 object-contain"
          />
        </Link> */}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col p-4 mt-10">
        {linkItems.map(({ path, text, icon }, index) => (
          <Link key={index} href={path} passHref>
            <div
              className={`flex items-center text-gray-500 py-3 px-4 rounded-md mb-2 cursor-pointer ${
                isActive(path) && "bg-white font-semibold text-yellow-500"
              }`}
            >
              {icon && <span className="mr-2">{icon}</span>}
              {text}
            </div>
          </Link>
        ))}
      </nav>

      <div
        onClick={logoutApp}
        className={`flex mt-10 absolute bottom-4 items-center text-gray-500 py-3 px-6 rounded-md mb-2 cursor-pointer`}
      >
        <LogoutIcon className="mr-1" />
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
