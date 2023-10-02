import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TenantDetails = () => {
  return (
    <div className="flex flex-col justify-center px-24 bg-white p-8">
      <form>
        <div className="space-y-12 bg-platinum p-6 rounded-lg shadow-md">
          <div className=" border-gray-300 pb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Tenant Details
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
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-white-100 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
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
              <div className="col-span-full">
                <div className="mt-2">
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    autoComplete="occupation"
                    placeholder="Occupation"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">
                Proof of identification
              </h3>
            </div>


            <div className="flex justify-between">
              <div className="mt-6">
                <label
                  htmlFor="passport"
                  className="block text-sm font-medium text-gray-800"
                >
                  <input
                    type="radio"
                    id="passport"
                    name="document-type"
                    className="mr-2"
                  />
                  Passport
                </label>
                <div className="mt-4 w-60">
                  <label
                    htmlFor="file-upload"
                    className="py-2 px-12 w-full text-gray border-1 relative cursor-pointer rounded-md bg-white font-semibold text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span><FontAwesomeIcon icon={faPlus} className="text-red100"/> Upload PDF</span>
                    <input
                      type="file"
                      name="passport-file"
                      id="file-upload"
                      autoComplete="off"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="passport"
                  className="block text-sm font-medium text-gray-800"
                >
                  <input
                    type="radio"
                    id="passport"
                    name="document-type"
                    className="mr-2"
                  />
                  Driver License
                </label>
                <div className="mt-4 w-60">
                  <label
                    htmlFor="file-upload"
                    className="py-2 px-12 w-full border-1 relative cursor-pointer rounded-md bg-white font-semibold text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                 <span><FontAwesomeIcon icon={faPlus} className="text-red100"/> Upload PDF</span>
                    <input
                      type="file"
                      name="passport-file"
                      id="file-upload"
                      autoComplete="off"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="passport"
                  className="block text-sm font-medium text-gray-800"
                >
                  <input
                    type="radio"
                    id="passport"
                    name="document-type"
                    className="mr-2"
                  />
                  Visa Document
                </label>
                <div className="mt-4 w-60">
                  <label
                    htmlFor="file-upload"
                    className="py-2 px-12 w-full border-1 relative cursor-pointer rounded-md bg-white font-semibold text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                      <span><FontAwesomeIcon icon={faPlus} className="text-red100"/> Upload PDF</span>
                    <input
                      type="file"
                      name="passport-file"
                      id="file-upload"
                      autoComplete="off"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>


          <div className=" border-gray-300 pb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">

              Proof Of Reference from Previous landlord
            </h3>

            <div className="flex gap-16">
              <div className="sm:col-span-3 w-1/3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Previous Landlord Name"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3 w-1/3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Previous Landlord Number"
                    className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full mt-8 mb-12">
              <div className="w-1/3">
                <p>Do you have pets ?</p>
                <div className=" flex space-x-12">
                <label>
                  <input type="radio" />
                  Yes
                </label>
                <label>
                  <input type="radio" />
                  No
                </label>
                </div>
              </div>
              <div className="w-1/3">
                <p>Do you Smoke ?</p>
                <div className=" flex space-x-12">
                <label>
                  <input type="radio" />
                  Yes
                </label>
                <label>
                  <input type="radio" />
                  No
                </label>
                </div>
              </div>
            </div>

            <button className="btn-outline px-12 text-red100 border-2 hover:border-red300 rounded-lg py-2 bg-white uppercase text-sm hover:text-red300 hover:shadow-lg shadow-lg">
            <FontAwesomeIcon icon={faPlus} className="text-red100 text-sm  "/> add more tenants
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TenantDetails;
