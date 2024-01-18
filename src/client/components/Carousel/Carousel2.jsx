import { SfButton } from "@storefront-ui/react";
import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/productActions";
const displayDetails = [
  // {
  //   image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display.png',
  //   title: 'Sunny Days Ahead',
  //   subtitle: 'Be inspired',
  //   description: 'Step out in style with our sunglasses collection',
  //   buttonText: 'Discover now',
  //   reverse: false,
  //   backgroundColor: 'bg-negative-200',
  //   titleClass: 'md:typography-display-2',
  //   subtitleClass: 'md:typography-headline-6',
  //   descriptionClass: 'md:typography-text-lg',
  // },
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png",
    title: "Pack it Up",
    subtitle: "Be active",
    description: "Explore the great outdoors with our backpacks",
    buttonText: "Discover now",
    reverse: true,
    backgroundColor: "bg-warning-200",
  },
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-3.png",
    title: "Fresh and Bold",
    subtitle: "New collection",
    description: "Add a pop up color to your outfit",
    buttonText: "Discover now",
    reverse: false,
    backgroundColor: "bg-secondary-200",
  },
];

export default function Carousel2() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col content-center lg:flex-row justify-center flex-wrap gap-6 ">
      {displayDetails.map(
        ({
          image,
          title,
          subtitle,
          description,
          buttonText,
          backgroundColor,
          reverse,
          titleClass,
          subtitleClass,
        }) => (
          <div
            key={title}
            className={classNames(
              "relative flex md:max-w-[500px] ",
              backgroundColor
            )}
          >
            <a
              className="absolute  h-full z-1 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href="#"
            />
            <div
              className={classNames("flex  overflow-hidden grow", {
                "flex-row-reverse": reverse,
              })}
            >
              <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames(
                    "uppercase typography-text-xs block font-bold tracking-normal leading-none",
                    subtitleClass
                  )}
                >
                  {subtitle}
                </p>
                <h2
                  className={classNames(
                    "mb-4 mt-2 font-bold typography-display-3 tracking-normal leading-none",
                    titleClass
                  )}
                >
                  {title}
                </h2>
                <p className="typography-text-base block mb-4">{description}</p>
                <SfButton
                  className="bg-[#0096B1] text-xs lg:text-base tracking-normal leading-none w-fit"
                  onClick={() => dispatch(getAllProducts())}
                >
                  {buttonText}
                </SfButton>
              </div>
              <img
                src={image}
                alt={title}
                className="w-1/2 self-end object-contain"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
