// pages/dashboard/index.js
import Layout from "../../components/Layout";

import { useRouter } from "next/router";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Dashboard = () => {
  
  return (
    <Layout>
      <div className={openSans.className}>
        <div className="mt-2">
          <div className="md:flex justify-between items-center">
            <h1 className="font-bold text-2xl">Dashboard</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
