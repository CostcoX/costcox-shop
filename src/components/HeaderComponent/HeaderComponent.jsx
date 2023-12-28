import React, { useState, useRef, useEffect } from "react";
import {
  SfIconSearch,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconMenu,
  SfIconClose,
  SfIconLocationOn,
  SfBadge,
  SfButton,
} from "@storefront-ui/react";

import LocationModal from "../LocationModal/LocationModal";
import { Link, useLocation, useNavigate } from "react-router-dom";
const allDeptCategories = [
  { id: 101, categoryName: "Electronics", href: "/electronics" },
  { id: 102, categoryName: "Home Appliances", href: "/electronics" },
  { id: 103, categoryName: "Kitchen ware", href: "/electronics" },
  {
    id: 103,
    categoryName: "Jewelry, Watches & Sunglasses",
    href: "/electronics",
  },
  { id: 103, categoryName: "Computers", href: "/electronics" },
  { id: 103, categoryName: "Mattresses", href: "/electronics" },
  { id: 103, categoryName: " Office Products", href: "/electronics" },
  { id: 103, categoryName: " Lawn & Garden", href: "/electronics" },
  { id: 103, categoryName: "Floral & Gift Baskets", href: "/electronics" },
  { id: 103, categoryName: "Sports & Fitness", href: "/electronics" },
  { id: 103, categoryName: "Tires & Auto", href: "/electronics" },
  { id: 103, categoryName: "Toys & Books", href: "/electronics" },
  { id: 103, categoryName: "Household Essentials", href: "/electronics" },
  { id: 103, categoryName: "Personal Care ", href: "/electronics" },
];

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoriesButtonRef = useRef(null);
  const accountsButtonRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesButtonRef.current &&
        !categoriesButtonRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }

      if (
        accountsButtonRef.current &&
        !accountsButtonRef.current.contains(event.target)
      ) {
        setShowAccounts(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window && window.scrollTo(0, 0);
  }, [pathname]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    console.log(isModalOpen, "after");
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigation = (url) => navigate(url);

  return (
    <div className="bg-white p-4 sticky top-0 z-10 border-b-2 border-primary-blue">
      <div className="flex items-center justify-between ">
        <a href="#" className="text-white">
          <img
            src="/logo.png"
            alt="Logo"
            className=" w-[160px] h-[20px] lg:w-[200px] lg:h-[50px] object-cover"
          />
        </a>

        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-md bg-neutral-100 text-neutral-700"
          />
          <button className="text-black focus:outline-none">
            <SfIconSearch className="h-6 w-6 text-neutral-500 absolute top-2 right-2" />
          </button>
        </div>

        {/* Burger menu for small screens */}
        <div className="flex items-center md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <SfIconClose /> : <SfIconMenu />}
          </button>

          {/* Mobile menu dropdown */}
          {showMobileMenu && (
            <div className="absolute right-0 top-12 bg-primary-light p-2 mt-2 rounded-md z-10 shadow-md">
              <div className="text-black cursor-pointer mb-2">
                <SfIconLocationOn
                  className="h-6 w-6 inline mr-2"
                  onClick={handleOpenModal}
                />
                Location
              </div>
              <div className="text-black cursor-pointer mb-2">
                <SfButton className="relative" square variant="tertiary">
                  <SfIconShoppingCart />
                  <SfBadge content={100} max={99} placement="top-right" />
                </SfButton>
              </div>
              <div className="text-black cursor-pointer mb-2">
                <SfIconFavorite className="h-6 w-6 inline mr-2" />
                Wishlist
              </div>
              <div className="text-black cursor-pointer">
                <SfIconPerson className="h-6 w-6 inline mr-2" />
                Account
              </div>
            </div>
          )}
        </div>

        {/* Icons for medium and large screens */}
        <div className="hidden md:flex items-center">
          <SfIconLocationOn className="text-black mx-4 cursor-pointer" />
          <SfButton
            className="relative"
            square
            variant="tertiary"
            onClick={() => navigate("/cart")}
          >
            <SfIconShoppingCart />
            <SfBadge content={100} max={0} placement="top-right" />
          </SfButton>
          <SfIconFavorite className="text-black mx-4 cursor-pointer" />
          <Link to="/account-settings/orders">
            <SfIconPerson className="text-black mx-4 cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center relative">
          <button
            ref={categoriesButtonRef}
            className="text-white focus:outline-none text-xs md:text-base bg-green-700 p-2 rounded-lg"
            onClick={() => setShowCategories(true)}
          >
            All Categories
          </button>

          <button
            className=" text-black px-4 py-2 rounded"
            onClick={() => handleNavigation("/shop")}
          >
            All Products
          </button>
          <button
            className="text-black mx-4 text-xs md:text-base"
            onClick={() => handleNavigation("/shop")}
          >
            Top Products
          </button>
          <button
            className="text-black focus:outline-none text-xs md:text-base"
            onClick={() => handleNavigation("/shop")}
          >
            Deals
          </button>
          {showCategories && (
            <div className="absolute bg-primary-light  mt-2 rounded-md shadow-md top-10 left-0 w-full md:w-fit z-10 h-72 overflow-scroll">
              {allDeptCategories.map((Category) => (
                <a to={Category.href} key={Category.id} className="block p-2">
                  {Category.categoryName}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <LocationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NavBar;
