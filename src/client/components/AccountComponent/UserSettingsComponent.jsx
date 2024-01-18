import React from "react";

const UserSettingsComponent = () => {
  return (
    <div className="p-4">
      <div className="py-6 md:py-6 lg:py-10 px-6 md:px-6 lg:px-10">
        <div className="mb-6">
          <h2 className="mb-0 text-2xl text-slate-800 font-bold">
            Account Setting
          </h2>
        </div>
        <div>
          <h5 className="mb-4 text-slate-800 font-semibold">Account details</h5>
          <div className="flex flex-col">
            <div class="lg:w-5/12 ">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-3 px-4 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="first-name"
                    id="first-name"
                    type="text"
                    placeholder="xyz"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-3 px-4 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    id="email"
                    type="text"
                    placeholder="xyz@gmail.com"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-3 px-4 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phone-number"
                    id="phone-number"
                    type="text"
                    placeholder="987654356"
                  />
                </div>
                <button
                  class="shadow bg-[#4db6c8] hover:bg-[#0096b1] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md"
                  type="button"
                >
                  Save Details
                </button>
              </form>
            </div>
            <hr className="my-10" />
            <div className="pe-lg-14">
              <h5 className="mb-4 text-slate-800 font-semibold">Password</h5>
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="current-password"
                    >
                      Current Password
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-3 px-4 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="current-password"
                      type="text"
                      placeholder="******************"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="new-password"
                    >
                      New Passoword
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-3 px-4 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="new-password"
                      type="text"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-4">
                    Can’t remember your current password? Reset your password.
                  </p>
                </div>
                <button
                  class="shadow bg-[#4db6c8] hover:bg-[ #00879f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md"
                  type="button"
                >
                  Save Password
                </button>
              </form>
            </div>
            <hr className="my-10" />
            <div>
              <h5 className="mb-4 text-slate-800 font-semibold">
                Delete Account
              </h5>
              <p className="mb-2">Would you like to delete your account?</p>
              <p class="mb-5">
                This account contain 12 orders, Deleting your account will
                remove all the order details associated with it.
              </p>
              <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsComponent;
