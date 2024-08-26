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
    console.log(data)
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
        <div className="lg:flex px-5 my-10 lg:my-0 items-center justify-between w-full">
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

                  <div className="flex items-center my-10">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  <div className="p-2 mb-4 border bg-gray-200 text-sm text-gray-600 font-semibold rounded-lg flex items-center justify-center space-x-3">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 10.3184V14.9656H18.4582C18.1746 16.4602 17.3236 17.7257 16.0472 18.5766L19.9417 21.5984C22.2108 19.5039 23.5199 16.4276 23.5199 12.773C23.5199 11.9221 23.4436 11.1039 23.3017 10.3185L12 10.3184Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.27461 14.7842L4.39625 15.4566L1.28711 17.8783C3.26165 21.7947 7.30862 24.5002 11.9995 24.5002C15.2394 24.5002 17.9557 23.4311 19.9412 21.5984L16.0467 18.5765C14.9776 19.2965 13.614 19.7329 11.9995 19.7329C8.87951 19.7329 6.22868 17.6275 5.27952 14.7911L5.27461 14.7842Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M1.28718 7.12207C0.469042 8.73655 0 10.5584 0 12.5002C0 14.442 0.469042 16.2638 1.28718 17.8783C1.28718 17.8891 5.27997 14.7801 5.27997 14.7801C5.03998 14.0601 4.89812 13.2965 4.89812 12.5001C4.89812 11.7036 5.03998 10.94 5.27997 10.22L1.28718 7.12207Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M11.9997 5.27818C13.767 5.27818 15.3379 5.88907 16.5925 7.06727L20.0288 3.63095C17.9452 1.68917 15.2398 0.5 11.9997 0.5C7.30887 0.5 3.26165 3.19454 1.28711 7.12183L5.27978 10.22C6.22882 7.38362 8.87976 5.27818 11.9997 5.27818Z"
                        fill="#EA4335"
                      />
                    </svg>

                    <span>Signin with Google</span>
                  </div>
                  <div className="p-2 border bg-gray-200 text-sm text-gray-600 font-semibold rounded-lg flex items-center justify-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="24px"
                      height="24px"
                    >
                      <path
                        fill="#1877F2"
                        d="M24 3C12.9 3 4 11.9 4 23c0 9.7 6.9 17.7 16 19.6v-13.8h-4.8v-5.8h4.8V18c0-4.8 2.8-7.4 7.1-7.4 2.1 0 4.3.4 4.3.4v4.7h-2.4c-2.4 0-3.2 1.5-3.2 3v3.5h5.4l-.9 5.8h-4.5V42.6C37.1 40.7 44 32.7 44 23 44 11.9 35.1 3 24 3z"
                      />
                    </svg>

                    <span>Signin with Facebook</span>
                  </div>
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
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default LoginBox;
