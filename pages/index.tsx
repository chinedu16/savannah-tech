// pages/index.js

import Layout from "../components/Layout";
import HeroPage from "../components/shared/HeroPage";
import ProductList from "../components/products/ProductList";
import Service from "../components/services";
import Post from "../components/post";
import Testimony from "../components/testimony";
import Image from "next/image";
import splashImage from "../public/splash-image.png";
import { Button } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <Layout>
      <div className="px-10 container mx-auto my-8 lg:px-20">
        <HeroPage />
        <ProductList />
        <Service />
        <Post />
        <Testimony />
      </div>

      <div>
        <div className=" relative" style={{ height: "640px" }}>
          <Image
            src={splashImage}
            alt="Post Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 text-center space-y-7 p-4  rounded-md">
              <p className="text-primary font-bold text-lg md:text-xl lg:text-2xl">
                Designing Better Experience
              </p>
              <h2 className="font-bold text-title text-2xl md:text-4xl lg:text-5xl">
                Problems trying to resolve the conflict between
              </h2>
              <p className="text-text-color text-sm md:text-base lg:text-lg">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:
              </p>

              <h4 className="text-2xl font-bold text-success-secondary">
                $16.48
              </h4>

              <Button
                style={{ background: "#23A6F0" }}
                variant="contained"
                size="large"
                className={`${montserrat.className}`}
              >
                ADD YOUR CALL TO ACTION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
