// components/Header.tsx
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="">
      <div className="lg:hidden flex  p-4 justify-between items-center">
        {/* <Image
          src={Logo}
          width={200}
          height={26}
          alt="Logo"
          className="h-7 w-28 object-contain"
        /> */}
        <svg
          onClick={handleMobileMenuToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
        >
          <path
            d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z"
            fill="#252B42"
          />
        </svg>
      </div>
      <nav className={`px-2 pt-2 pb-4 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="lg:hidden flex p-4 bg-gray-100 border-gray-300 rounded border font-semibold flex-col space-y-2">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/accounts">Accounts</Link>
          </li>
          <li>
            <Link href="/transactions">Transactions</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
         
        </ul>
      </nav>
      <div className="bg-gray-50 hidden lg:flex items-center">
        <div className="w-full px-6 mt-5">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <TextField
                id="input-with-icon-textfield"
                label=""
                className="w-full bg-white"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_501_2024)">
                    <path
                      d="M19.29 17.29L18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.62999 5.36 5.99999 7.92 5.99999 11V16L4.70999 17.29C4.07999 17.92 4.51999 19 5.40999 19H18.58C19.48 19 19.92 17.92 19.29 17.29ZM16 17H7.99999V11C7.99999 8.52 9.50999 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17ZM12 22C13.1 22 14 21.1 14 20H9.99999C9.99999 21.1 10.89 22 12 22Z"
                      fill="#84919A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_501_2024">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" fill="black" fill-opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
