// pages/accounts.tsx

import Layout from "../../components/Layout";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function createData(
  name: string,
  account: string,
  amount: number,
  destination: string,
  status: string,
  date: string
) {
  return { name, account, amount, destination, status, date };
}

const rows = [
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "completed",
    "24th April 2023"
  ),
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "completed",
    "24th April 2023"
  ),
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "failed",
    "24th April 2023"
  ),
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "failed",
    "24th April 2023"
  ),
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "completed",
    "24th April 2023"
  ),
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "pending",
    "24th April 2023"
  ),
  createData(
    "Glasgow Oil Industries",
    "0092010203",
    12393,
    "Canada",
    "pending",
    "24th April 2023"
  ),
];
const Accounts = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/accounts/send-money')
  }
  return (
    <Layout>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Accounts</h1>
          <div className="flex space-x-2">
            <Button
              className=" hover:bg-orange-400 text-white bg-primary shadow-none"
              variant="contained"
              size="large"
              onClick={handleLogin}
              style={{background: '#ffc107'}}
              startIcon={<AddIcon />}
            >
              Send Money
            </Button>
          </div>
        </div>
        <div className="mt-4 w-full flex space-x-6">
          <div className="mt-6 md:flex rounded-lg w-full">
            <div className="p-6 border-l border-b border-t rounded-l-lg border-gray-300 w-full md:w-2/6 bg-white">
              <div className="mb-5 border w-fit rounded-full bg-yellow-100 text-gray-500 text-sm px-4 py-2">
                Naira Account(₦)
              </div>
              <h5 className="text-3xl font-bold ">₦120,543.43</h5>
              <h6>Ledger Balance: ₦167,543.43</h6>
            </div>
            <div className="mt-4 md:mt-0 p-6 border border-gray-300 rounded-r-lg w-full md:w-2/6 flex flex-col justify-center">
              <h5 className="text-lg font-semibold ">Acct. No: 8238339395</h5>
              <h6>Chinedu Ohagwu-CHINEDU ANTHONY OHAGWU</h6>
            </div>
          </div>
        </div>

        <div className="bg-white mt-6">
          <div className="flex justify-between p-3 md:p-6 items-center border-b border-gray-300 pb-4">
            <h3 className="font-semibold md:text-xl">Recent Transactions</h3>
            <div className="bg-white border px-6 py-2 rounded">
              <FilterAltIcon /> Filters
            </div>
          </div>
          <div className="mt-6">
            <TableContainer
              sx={{ fontSize: "70px" }}
              className={`shadow-none`}
              component={Paper}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                    >
                      Beneficiary Name
                    </TableCell>
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Account
                    </TableCell>
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Account Sent
                    </TableCell>

                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Destination
                    </TableCell>
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Status
                    </TableCell>
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <TableCell
                        className={`${montserrat.className}`}
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>

                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        {row.account}
                      </TableCell>
                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        {row.amount}
                      </TableCell>
                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        🇨🇦 {row.destination}
                      </TableCell>
                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        {row.status === "completed" ? (
                          <div className="bg-green-100 text-green-500 py-1 text-xs font-semibold px-3 rounded-full flex justify-end w-fit">
                            {" "}
                            {row.status}
                          </div>
                        ) : row.status === 'failed' ? (
                          <div className="bg-red-100 text-red-500 py-1 text-xs font-semibold px-3 rounded-full flex justify-end w-fit">
                            {" "}
                            {row.status}
                          </div>
                        ) : 
                        <div className="bg-gray-100 text-gray-500 py-1 text-xs font-semibold px-3 rounded-full flex justify-end w-fit">
                            {" "}
                            {row.status}
                          </div>}
                      </TableCell>
                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        {row.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accounts;
