const AnalyticsCard: React.FC = () => {
  return (
    <div>
      <div className="">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 font-semibold text-lg">
              Transactions
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_501_2128)">
                <path
                  d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="#84919A"
                />
              </g>
              <defs>
                <clipPath id="clip0_501_2128">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="space-y-2 mt-4">
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-300"></div>
                <div>
                  <h5 className="font-medium">Lunch money</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-red-500">-₦10.00</div>
            </div>
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-300"></div>
                <div>
                  <h5 className="font-medium">Pay David</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-red-500">-₦10.00</div>
            </div>
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-300"></div>
                <div>
                  <h5 className="font-medium">Netflix subscription</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-red-500">-₦10.00</div>
            </div>
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-300"></div>
                <div>
                  <h5 className="font-medium">April Bonus</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-green-500">+₦500.00</div>
            </div>
            <div className="py-3 flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-300"></div>
                <div>
                  <h5 className="font-medium">Lunch money</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-green-500">+₦500.00</div>
            </div>
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-300"></div>
                <div>
                  <h5 className="font-medium">Lunch money</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-red-500">-₦10.00</div>
            </div>
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-300"></div>
                <div>
                  <h5 className="font-medium">Pay David</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-red-500">-₦10.00</div>
            </div>
            <div className="py-3 border-b flex justify-between">
              <div className="space-x-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-300"></div>
                <div>
                  <h5 className="font-medium">Netflix subscription</h5>
                  <p className="text-gray-400 text-sm">05 April 2023</p>
                </div>
              </div>
              <div className="text-red-500">-₦10.00</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
