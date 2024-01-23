// pages/dashboard/index.js

import Layout from "../../components/Layout";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
import TransactionCard from "../../components/dashboard/TransactionCard";
import PieChart from "../../components/dashboard/PieChart";
import LineCharts from "../../components/dashboard/LineCharts";

import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/accounts/send-money')
  }
  return (
    <Layout>
      <div className="mt-2">
        <div className="md:flex justify-between items-center">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <div className="mt-5 md:mt-0 flex space-x-2">
            <div className="bg-white border px-6 py-2 rounded">
              <FilterAltIcon /> Filters
            </div>

            <Button
              className=" hover:bg-orange-400 text-white bg-primary shadow-none"
              variant="contained"
              size="small"
              onClick={handleLogin}
              startIcon={<AddIcon />}
            >
              Send Money
            </Button>
          </div>
        </div>
        <div className="mt-8 w-full lg:flex lg:space-x-6">
          <div className="lg:w-8/12 space-y-4">
            <AnalyticsCard />
            <LineCharts />
          </div>
          <div className="mt-5 lg:mt-0 lg:w-4/12 space-y-4">
            <PieChart />
            <TransactionCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
