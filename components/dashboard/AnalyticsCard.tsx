import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import IncomeIcon from "../../public/income-icon.svg";
import BalanceIcon from "../../public/balance-icon.svg";
import ExpensesIcon from "../../public/expenses-icon.svg";

const AnalyticsCard: React.FC = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="flex justify-between">
            <Image
              src={BalanceIcon}
              className="w-10 h-10"
              width={40}
              height={40}
              alt="balance"
            />
            <div className="flex text-green-600 items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_501_2060)">
                  <path
                    d="M10.8333 15.8333V6.525L14.9 10.5917C15.225 10.9167 15.7583 10.9167 16.0833 10.5917C16.4083 10.2667 16.4083 9.74167 16.0833 9.41667L10.5917 3.925C10.2667 3.6 9.74167 3.6 9.41667 3.925L3.91667 9.40834C3.59167 9.73334 3.59167 10.2583 3.91667 10.5833C4.24167 10.9083 4.76667 10.9083 5.09167 10.5833L9.16667 6.525V15.8333C9.16667 16.2917 9.54167 16.6667 10 16.6667C10.4583 16.6667 10.8333 16.2917 10.8333 15.8333Z"
                    fill="#5DB57A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_501_2060">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              10.32%
            </div>
          </div>
          <h3 className="text-gray-500">Balance</h3>
          <h5 className="text-2xl font-bold ">₦12,003.902</h5>
        </div>
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="flex justify-between">
            <Image
              src={BalanceIcon}
              className="w-10 h-10"
              width={40}
              height={40}
              alt="balance"
            />
            <div className="flex text-green-600 items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_501_2060)">
                  <path
                    d="M10.8333 15.8333V6.525L14.9 10.5917C15.225 10.9167 15.7583 10.9167 16.0833 10.5917C16.4083 10.2667 16.4083 9.74167 16.0833 9.41667L10.5917 3.925C10.2667 3.6 9.74167 3.6 9.41667 3.925L3.91667 9.40834C3.59167 9.73334 3.59167 10.2583 3.91667 10.5833C4.24167 10.9083 4.76667 10.9083 5.09167 10.5833L9.16667 6.525V15.8333C9.16667 16.2917 9.54167 16.6667 10 16.6667C10.4583 16.6667 10.8333 16.2917 10.8333 15.8333Z"
                    fill="#5DB57A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_501_2060">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              34.32%
            </div>
          </div>
          <h3 className="text-gray-500">Incomes This Month</h3>
          <h5 className="text-2xl font-bold ">₦12,003.902</h5>
        </div>
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="flex justify-between">
            <Image
              src={BalanceIcon}
              className="w-10 h-10"
              width={40}
              height={40}
              alt="balance"
            />
            <div className="flex text-red-600 items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.46967 13.5303C4.76256 13.8232 5.23744 13.8232 5.53033 13.5303L9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967L5.75 11.1893V1C5.75 0.585787 5.41421 0.25 5 0.25C4.58579 0.25 4.25 0.585787 4.25 1V11.1893L1.53033 8.46967C1.23744 8.17678 0.762563 8.17678 0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033L4.46967 13.5303Z"
                  fill="#DD525A"
                />
              </svg>
              5.32%
            </div>
          </div>
          <h3 className="text-gray-500">Expenses This Month</h3>
          <h5 className="text-2xl font-bold ">₦12,003.902</h5>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
