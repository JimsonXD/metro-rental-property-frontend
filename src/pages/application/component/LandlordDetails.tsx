import React from "react";

const LandlordDetails = () => {
  return (
    <div className="flex flex-col justify-center px-24 bg-white p-8">
      <form>
        <div className="space-y-12 bg-platinum p-6 rounded-lg shadow-md">
          <div className="border-gray-300 pb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Landlord Details
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="First Name"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="flex gap-16 mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="mt-2">
                  <input
                    type="text"
                    name="current-residential-address"
                    id="current-residential-address"
                    autoComplete="current-residential-address"
                    placeholder="Current residential address"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="mt-2">
                  <input
                    type="text"
                    name="work-address"
                    id="work-address"
                    autoComplete="work-address"
                    placeholder="Work address"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LandlordDetails;
