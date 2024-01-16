import React from "react";

const userAddress = [
  {
    addressType: "Home",
    addressName: "Jitu Chauhan",
    addressLineOne: "4450 North Avenue Oakland",
    city: "",
    state: "Nebraska",
    country: "United States",
    phone: "402-776-1106",
    default: true,
  },
  {
    addressType: "Office",
    addressName: "Nitu Chauhan",
    addressLineOne: "3853 Coal Road",
    city: "Tannersville",
    state: "Pennsylvania",
    country: "United States",
    phone: "402-776-1106",
    default: false,
  },
];

const UserAddressComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:w-[100%] md:w-2/3  px-4">
        <div className="p-12">
          <div className="flex justify-between mb-6">
            <h2 className="mb-0 text-2xl text-slate-800 font-bold">Address</h2>
            <button className="bg-transparent hover:bg-[#4db6c8] text-[#4db6c8] font-semibold hover:text-white py-2 px-4 border border-[#4db6c8] hover:border-transparent rounded">
              Add a new address
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-4 gap-8">
        {userAddress.map((address, index) => {
          const defaultBtnClass = address.default
            ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
            : "text-green-600 hover:text-green-700";
          const defaultBtnText = address.default
            ? "Default address"
            : "Set as Default";
          return (
            <div class="col-span-12 md:col-span-5 xxl:col-span-4 mb-4">
              <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div class="p-6">
                  <div class="mb-4">
                    <input
                      type="radio"
                      class="form-radio"
                      name="flexRadioDefault"
                      id="homeRadio"
                      checked={address.default}
                      disabled={!address.default}
                    />
                    <label for="homeRadio" class="ml-2 text-dark font-semibold">
                      {address.addressType}
                    </label>
                  </div>
                  <p class="mb-6">
                    {address.addressName}
                    <br />
                    {address.addressLineOne},
                    <br />
                    {address.city
                      ? `${address.city}, ${address.state},`
                      : `${address.state},`}
                    <br />
                    {address.country},
                    <br />
                    {address.phone}
                  </p>
                  <a href="#" class={defaultBtnClass}>
                    {defaultBtnText}
                  </a>
                  <div class="mt-4">
                    <a href="#" class="text-gray-800 hover:text-green-500">
                      Edit
                    </a>
                    <a
                      href="#"
                      class="text-red-500 ml-3"
                      data-toggle="modal"
                      data-target="#deleteModal"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserAddressComponent;
