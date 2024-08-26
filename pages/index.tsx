// LoginBox.tsx
import Image from "next/image";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../components/base/Input";
import { login } from "../util/validationSchema";
import LoginImage from "../public/image-login.png";
import { logIn } from "../features/firebaseAuth";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

interface FormValues {
  email: string;
  password: string;
  name: string;
}
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const LoginBox: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(login),
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setError("");
    try {
      const response = await logIn(data.email, data.password);
      if (response) {
        router.push("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div lang="en" className={openSans.className}>
        <div className="lg:flex my-10 lg:my-0 items-center justify-between w-full">
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="bg-white w-full md:w-7/12 space-y-6">
              <h2 className="text-3xl text-neutral-800 font-semibold ">
                Welcome Back 👋
              </h2>
              <p className="text-neutral-600">
                Today is a new day. its your day. You help shape it. <br /> Sign
                in to start managing your todo list
              </p>

              <div className="space-y-7 pt-5">
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <InputField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <div className="flex justify-end mt-4 text-sm text-blue-600">
                    <Link href="/">Forgot Password?</Link>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-neutral-800 mt-6 w-full text-white px-4 py-3 rounded-md"
                  >
                    {loading ? <CircularProgress style={{ width: '20px', height: '20px', color: 'white' }} /> : "Sign in"}
                  </button>
                  {error && <p className="text-red-500 mt-2">{error}</p>}

            
                
                </form>
              </div>

              <div className="flex justify-center text-sm">
                <Link href="/signup">
                  Don’t have an account?{" "}
                  <span className="text-blue-600">Sign up</span>{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 hidden h-screen lg:flex justify-end items-end">
            <Image
              src={LoginImage}
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default LoginBox;
