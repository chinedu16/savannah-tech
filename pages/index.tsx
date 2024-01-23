// LoginBox.tsx
import Image from "next/image";

import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo from "../public/harconomy-logo.png";
import Button from "@mui/material/Button";
import { Montserrat } from "next/font/google";

import { login } from "../features/authSlice";

const montserrat = Montserrat({ subsets: ["latin"] });

const LoginBox: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Basic email and password validation
    if (!email || !password) {
      setError("Please enter both email or password");
      return;
    }

    // Assuming you have more complex validation logic for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (email === "admin@admin.com" && password === "admin") {
      const user = { email, password, role: "admin" };
      dispatch(login(user));
      router.push("/user");
    } else {
      const user = { email, password, role: "user" };
      dispatch(login(user));
      router.push("/dashboard");
    }
    
  };
  return (
    <div className="flex items-center justify-center h-screen p-5 md:p-0">
      <div className="bg-white w-full md:w-2/6 space-y-7">
        <div className="flex justify-end">
          <Image
            src={Logo}
            width={200}
            height={26}
            alt="Logo"
            className="h-10 w-40 object-contain"
          />
        </div>
        <h2 className="text-4xl font-semibold">Welcome,</h2>
        <p>Welcome back to Herconomy. sign in to continue</p>
        <Box component="form" noValidate autoComplete="off">
          <div className="space-y-7">
            <TextField
              required
              className="w-full"
              id="outlined-required"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              className="w-full"
              id="outlined-password-input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
           {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end mt-4">
            <Link href="/forget-password">Forgot Password?</Link>
            
          </div>
         

          <Button
            size="large"
            onClick={handleLogin}
            className={`w-full mt-7 mb-5 hover:bg-orange-400 text-white h-12 shadow-none bg-primary rounded-none ${montserrat.className}`}
            variant="contained"
            style={{background: '#ffc107'}}
          >
            Login
          </Button>

          <div className="flex justify-center">
            <Link href="/forget-password">
              Don’t have an account?{" "}
              <span className="text-primary">Sign up</span>{" "}
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default LoginBox;
