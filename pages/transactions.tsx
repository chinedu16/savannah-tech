// pages/transaction.tsx
import { useState } from "react";
import Layout from "../components/Layout";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

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
const Transactions = () => {
  const [transactionsType, setTransactionsType] = useState("all");

  const handleChange = (event: SelectChangeEvent) => {
    setTransactionsType(event.target.value as string);
  };

  return (
    <Layout>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Transactions</h1>
        </div>

        <div className="bg-white mt-6">
          <div className="md:flex justify-between p-3 md:p-6 items-center border-b border-gray-300 pb-4">
            <h3 className="font-semibold md:text-xl">All Transactions</h3>
            <div className="mt-5 md:mt-0 space-x-2 flex items-center">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transactionsType}
                size="small"
                placeholder=""
                onChange={handleChange}
              >
                <MenuItem value="all" disabled>
                  Transaction Status
                </MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="failed">Failed</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
              <div className="bg-white border px-6 py-2 rounded">
                <FilterAltIcon /> Filters
              </div>
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
                        ) : row.status === "failed" ? (
                          <div className="bg-red-100 text-red-500 py-1 text-xs font-semibold px-3 rounded-full flex justify-end w-fit">
                            {" "}
                            {row.status}
                          </div>
                        ) : (
                          <div className="bg-gray-100 text-gray-500 py-1 text-xs font-semibold px-3 rounded-full flex justify-end w-fit">
                            {" "}
                            {row.status}
                          </div>
                        )}
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

export default Transactions;
