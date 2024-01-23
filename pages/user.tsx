// pages/transaction.tsx
import { useState, useEffect } from "react";
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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MenuItem from "@mui/material/MenuItem";

import { useDispatch } from "react-redux";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

import { deleteUser, addUser } from "../features/userSlice";
import { useToast } from "react-toastify";
import { useSelector } from "react-redux";


function createData(
  id: number,
  name: string,
  account: string,
  amount: number,
  status: string,
  date: string
) {
  return { id, name, account, amount, status, date };
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomStatus = () => {
  return Math.random() < 0.5 ? "active" : "inactive";
};

const createRandomData = () => {
  const names = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
    "Company G",
    "Company H",
    "Company I",
    "Company J",
  ];
  const accountNumbers = [
    "123456789",
    "987654321",
    "567890123",
    "012345678",
    "123456789",
    "987654321",
    "567890123",
    "012345678",
    "567890123",
    "012345678",
  ];

  return names.map((name, index) => {
    return createData(
      getRandomInt(1, 40),
      name,
      accountNumbers[index],
      getRandomInt(10000, 50000),
      getRandomStatus(),
      "24th April 2023" // Assuming the date is constant for this example
    );
  });
};

const rows = createRandomData();


const User = () => {
  const { users } = useSelector((state: any) => state.user);

  // const toast = useToast();
  const dispatch = useDispatch();
  const [transactionsType, setTransactionsType] = useState("all");

  const handleChange = (event: SelectChangeEvent) => {
    setTransactionsType(event.target.value as string);
  };

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    dispatch(addUser(rows));
  }, [dispatch]);

  return (
    <Layout>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Users</h1>
        </div>

        <div className="bg-white mt-6">
          <div className="flex justify-between p-6 items-center border-b border-gray-300 pb-4">
            <h3 className="font-semibold text-xl">All Users</h3>
            <div className="space-x-2 flex items-center">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transactionsType}
                size="small"
                placeholder=""
                onChange={handleChange}
              >
                <MenuItem value="all" disabled>
                  User Status
                </MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
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
                      Account Number
                    </TableCell>
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Balance
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
                    <TableCell
                      className={`${montserrat.className}`}
                      sx={{ fontWeight: "bold" }}
                      align="left"
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row) => (
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
                        ₦{row.amount}
                      </TableCell>

                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        {row.status === "active" ? (
                          <div className="bg-green-100 text-green-500 py-1 text-xs font-semibold px-3 rounded-full flex justify-end w-fit">
                            {" "}
                            {row.status}
                          </div>
                        ) : row.status === "inactice" ? (
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
                      <TableCell
                        className={`${montserrat.className}`}
                        align="left"
                      >
                        <DeleteOutlineIcon
                          onClick={() => handleDeleteUser(row.id)}
                          className="text-red-500 cursor-pointer"
                        />
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

export default User;
