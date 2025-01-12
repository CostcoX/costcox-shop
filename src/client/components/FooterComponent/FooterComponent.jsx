import React from "react";

import {
  SfIconContactSupport,
  SfIconFacebook,
  SfIconHelp,
  SfIconInstagram,
  SfIconCall,
  SfIconPinterest,
  SfIconTwitter,
  SfIconYoutube,
  SfButton,
  SfLink,
  SfListItem,
} from "@storefront-ui/react";
import logoImg from "../../../../public/images/logo.png";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "About",
    subcategories: [
      {
        subcategoryLabel: "About us",
        link: "/about-us",
      },
      {
        subcategoryLabel: "Contact Us",
        link: "#",
      },
      {
        subcategoryLabel: "Return Policies",
        link: "/Return-Policy",
      },
      {
        subcategoryLabel: "Terms & Condition",
        link: "#",
      },
    ],
  },
];
const socialMedia = [
  {
    label: "Facebook",
    link: "#",
    icon: () => <SfIconFacebook />,
  },
  {
    label: "Twitter",
    link: "#",
    icon: () => <SfIconTwitter />,
  },
  {
    label: "Instagram",
    link: "#",
    icon: () => <SfIconInstagram />,
  },
  {
    label: "Pinterest",
    link: "#",
    icon: () => <SfIconPinterest />,
  },
  {
    label: "Youtube",
    link: "#",
    icon: () => <SfIconYoutube />,
  },
];
const contactOptions = [
  {
    label: "Help center",
    link: "#",
    details: ["Find answers online anytime"],
    icon: () => <SfIconHelp size="lg" />,
  },
  {
    label: "Live chat",
    link: "#",
    details: ["Mon–Fri, 5am–10pm PT", "Sat–Sun, 6am–9pm PT"],
    icon: () => <SfIconContactSupport size="lg" />,
  },
  {
    label: "1 234 567 8901",
    link: "#",
    details: ["Mon–Fri, 5am–10pm PT", "Sat–Sun, 6am–9pm PT"],
    icon: () => <SfIconCall size="lg" />,
  },
];
const bottomLinks = [
  {
    label: "Terms",
    link: "#",
  },
  {
    label: "Privacy policy",
    link: "#",
  },
];
export default function FooterComponent() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="pt-3 bg-neutral-100 mt-20">
      <div className=" px-4 md:px-6 pb-3 max-w-[1536px] mx-auto">
        <div className="">
          {categories.map(({ label, subcategories }) => (
            <ul
              className="flex flex-col sm:flex sm:flex-row xs:pb-4"
              key={label}
            >
              {subcategories?.map(({ subcategoryLabel, link }) => (
                <SfListItem
                  className="py-2 !bg-transparent !text-[#0096B1] w-fit text-center"
                  key={subcategoryLabel}
                >
                  <Link
                    className=" text-black no-underline hover:!text-[#0096B1] text-lg font-medium  hover:underline  "
                    variant="secondary"
                    to={link}
                  >
                    {subcategoryLabel}
                  </Link>
                </SfListItem>
              ))}
            </ul>
          ))}
        </div>
        <div className="align-middle">
          <img
            src={logoImg}
            alt="Logo"
            className=" w-full max-h-[100px]  object-contain"
          />
          <p className="text-center">@{year} CostcoX All Rights Reserved</p>
        </div>
      </div>
      <hr />
      {/* <div className="py-10 md:flex md:mx-auto max-w-[1536px]">
        {contactOptions.map(({ label, icon: Icon, link, details }) => (
          <div className="mx-auto my-4 text-center" key={label}>
            <Icon />
            <p className="py-1 my-2 font-medium typography-text-lg font-body">
              <SfLink
                variant="secondary"
                className="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
                href={link}
              >
                {label}
              </SfLink>
            </p>
            {details?.map((option) => (
              <p
                className="leading-5 typography-text-sm text-neutral-600 font-body"
                key={option}
              >
                {option}
              </p>
            ))}
          </div>
        ))}
      </div> */}
      {/* <div className="bg-neutral-900 justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
        <div className="flex justify-center py-2 gap-x-4 md:self-start">
          {socialMedia.map(({ icon: Icon, label, link }) => (
            <SfButton
              key={label}
              square
              as="a"
              variant="tertiary"
              className="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:bg-transparent"
              href={link}
              aria-label={`Go to ${label} page`}
            >
              <Icon />
            </SfButton>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
          {bottomLinks.map(({ label, link }) => (
            <SfLink
              key={label}
              variant="secondary"
              className="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
              href={link}
            >
              {label}
            </SfLink>
          ))}
        </div>
        <p className="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-white/50 font-body md:ml-6">
        @{year} CostcoX
        </p>
      </div> */}
    </footer>
  );
}
