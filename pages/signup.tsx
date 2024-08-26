// SignupBox.tsx
import Image from "next/image";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../components/base/Input";
import { signup } from "../util/validationSchema";
import LoginImage from "../public/image-login.png";
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';


interface FormValues {
  email: string;
  password: string;
  name: string;
}
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { signUp } from "../features/firebaseAuth";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const SignupBox: React.FC = () => {
  const router = useRouter();
  const methods = useForm<FormValues>({
    resolver: yupResolver(signup),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    setError("")
    try {
      const response = await signUp(data.email, data.password, data.name);
      if (response) {
        router.push('/dashboard');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <FormProvider {...methods}>
      <div lang="en" className={openSans.className}>
        <div className="lg:flex my-10 lg:my-0 items-center justify-between w-full">
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="bg-white w-full md:w-7/12 space-y-4">
              <h2 className="text-3xl text-neutral-800 font-semibold">
                Let’s Create Your Account. 😀
              </h2>
              <p className="text-neutral-600">
                Sign up for free and get started quickly.
              </p>

              <div className="space-y-4 pt-3">
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <InputField
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                  />
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
                  <InputField
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    placeholder="Please confirm password"
                  />

                  <div className="flex justify-end mt-4 text-sm text-blue-600">
                    <Link href="/">Forgot Password?</Link>
                  </div>

                  <button
                    type="submit"
                    className="bg-neutral-800 mt-4 w-full text-white px-4 py-3 rounded-md flex justify-center items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress style={{ width: '20px', height: '20px', color: 'white' }} />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                  {error && <p className="text-red-500 mt-2">{error}</p>}

                  
                </form>
              </div>

              <div className="flex justify-center text-sm">
                <Link href="/">
                  Already have an account?
                  <span className="text-blue-600"> Sign in</span>{" "}
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

export default SignupBox;
