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
import logoImg from "../../../../public/images/logo.png";
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
    <div className="bg-white p-4 sticky top-0 z-10 border-b-2 border-[#0096B1]">
      <div className="flex items-center justify-between ">
        <a href="#" className="text-white">
          <img
            src={logoImg}
            alt="Logo"
            className=" w-full h-[100px] lg:w-[200px] lg:h-[75px] object-cover"
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
            <div className="absolute right-0 top-12 bg-[#cceaef] p-2 mt-2 rounded-md z-10 shadow-md">
              <div className="text-black cursor-pointer mb-2">
                <SfIconLocationOn
                  className="h-6 w-6 inline mr-2"
                  onClick={handleOpenModal}
                />
                Location
              </div>
              <div className="text-black cursor-pointer mb-2 ml-0">
                <SfButton className="relative" square variant="tertiary">
                  <SfIconShoppingCart className="h-6 w-6 inline " />
                  <SfBadge content={100} max={99} placement="top-right" />
                  <p>Cart</p>
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
        <div className="hidden md:flex items-center ">
          <SfButton
            className="relative hover:!bg-[#cceaef] w-fit active:!bg-[#cceaef]"
            square
            variant="tertiary"
            onClick={() => navigate("/")}
          >
            <SfIconLocationOn className="text-black mx-4 cursor-pointer " />
          </SfButton>
          <SfButton
            className="relative hover:!bg-[#cceaef] active:!bg-[#cceaef]"
            square
            variant="tertiary"
            onClick={() => navigate("/cart")}
          >
            <SfIconShoppingCart className="text-black" />
            <SfBadge content={100} max={0} placement="top-right" />
          </SfButton>
          <SfButton
            className="relative hover:!bg-[#cceaef] active:!bg-[#cceaef]"
            square
            variant="tertiary"
            onClick={() => navigate("/")}
          >
            <SfIconFavorite className="text-black mx-4 cursor-pointer" />
          </SfButton>
          <SfButton
            className="relative hover:!bg-[#cceaef] active:!bg-[#cceaef]"
            square
            variant="tertiary"
            onClick={() => navigate("/account-settings/orders")}
          >
            <Link to="">
              <SfIconPerson className="text-black mx-4 cursor-pointer" />
            </Link>
          </SfButton>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center relative justify-evenly ">
          <button
            ref={categoriesButtonRef}
            className="text-white focus:outline-none text-xs md:text-base bg-[#0096B1] p-2 rounded-lg"
            onMouseMove={() => setShowCategories(true)} 
            onMouseOut={() => setShowCategories(false)} 
          >
            All Categories
          </button>

          <button
            className=" text-black  py-2 rounded"
            onClick={() => handleNavigation("/shop")}
          >
            Home
          </button>
          <button
            className="text-black  text-xs md:text-base"
            onClick={() => handleNavigation("/shop")}
          >
            All Products
          </button>
          <button
            className="text-black focus:outline-none text-base md:text-base disabled:opacity-40 cursor-not-allowed "
            onClick={() => handleNavigation("/shop")}
            
          >
            Top Products
          </button>
          {showCategories && (
            <div className="absolute bg-[#cceaef] mt-2 rounded-md shadow-md top-10 md:left-[13%] w-full md:w-fit z-10 h-72 overflow-y-scroll no-scrollbar" 
            onMouseMove={() => setShowCategories(true)}   >
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
