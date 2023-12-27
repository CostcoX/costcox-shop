import React, { Fragment, useState } from "react";
import {
  SfAccordionItem,
  SfButton,
  SfCounter,
  SfChip,
  SfIconClose,
  SfIconChevronLeft,
  SfIconArrowBack,
  SfIconCheck,
  SfListItem,
  SfThumbnail,
  SfRadio,
  SfRating,
  SfSelect,
  SfCheckbox,
  SfDrawer,
} from "@storefront-ui/react";
import classNames from "classnames";
import { sortOptions, filtersData } from "../../common/testConstants";

const FilterComponent = (props) => {
  const { filterOpen, placement, nodeRef, setFilterOpen } = props;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [opened, setOpened] = useState(filtersData.map((item) => item.id));

  const isAccordionItemOpen = (id) => opened.includes(id);

  const isFilterSelected = (selectedValue) =>
    selectedFilters.includes(selectedValue);

  const handleFilterSelection = (selectedValue) => {
    if (selectedFilters.indexOf(selectedValue) > -1) {
      setSelectedFilters([
        ...selectedFilters.filter((value) => value !== selectedValue),
      ]);
    } else {
      setSelectedFilters([...selectedFilters, selectedValue]);
    }
  };

  const handleToggle = (id) => (open) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setPrice(null);
    setRating(null);
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-full shadow-none md:translate-x-0 z-[100] md:z-0 md:static -translate-x-full shrink-0 md:w-[303px] bg-white">
      <div className="flex items-center justify-between mb-4">
        <h4 className="px-2 font-bold typography-headline-4">List settings</h4>
        <button
          type="button"
          className="sm:hidden text-neutral-500"
          aria-label="Close filters panel"
          onClick={() => setFilterOpen(false)}
        >
          <SfIconClose />
        </button>
      </div>
      <h5 className="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Sort by
      </h5>
      <div className="px-2">
        <SfSelect aria-label="Sorting">
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
      <h5 className="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Filter
      </h5>
      {filtersData.map((section) => (
        <Fragment key={section.id}>
          <SfAccordionItem
            onToggle={handleToggle(section.id)}
            open={isAccordionItemOpen(section.id)}
            summary={
              <div className="flex justify-between p-2 mb-2">
                <p className="mb-2 font-medium typography-headline-5">
                  {section.summary}
                </p>
                <SfIconChevronLeft
                  className={classNames(
                    "text-neutral-500",
                    `${
                      isAccordionItemOpen(section.id)
                        ? "rotate-90"
                        : "-rotate-90"
                    }`
                  )}
                />
              </div>
            }
          >
            {section.type === "category" && (
              <ul className="mt-2 mb-6">
                {/* <li>
                  <SfListItem size="sm" as="button" type="button">
                    <span className="flex items-center">
                      <SfIconArrowBack
                        size="sm"
                        className="text-neutral-500 mr-3"
                      />
                      Back to {section.details[0].label}
                    </span>
                  </SfListItem>
                </li> */}
                {section.details.map(
                  ({ id, link, label, counter }, categoryIndex) => (
                    <li key={id}>
                      <SfListItem
                        size="sm"
                        as="a"
                        href={link}
                        className={classNames(
                          "first-of-type:mt-2 rounded-md active:bg-primary-100",
                          {
                            "bg-primary-100 hover:bg-primary-100 font-medium":
                              categoryIndex === 0,
                          }
                        )}
                        slotSuffix={
                          categoryIndex === 0 && (
                            <SfIconCheck
                              size="sm"
                              className="text-primary-700"
                            />
                          )
                        }
                      >
                        <span className="flex items-center">
                          {label}
                          <SfCounter className="ml-2 typography-text-sm font-normal">
                            {counter}
                          </SfCounter>
                        </span>
                      </SfListItem>
                    </li>
                  )
                )}
              </ul>
            )}
            {section.type === "radio" && (
              <fieldset name="radio-price">
                {section.details.map(({ label, value, counter }) => (
                  <SfListItem
                    key={value}
                    as="label"
                    size="sm"
                    disabled={counter === 0}
                    className={classNames(
                      "px-1.5 bg-transparent hover:bg-transparent",
                      {
                        "font-medium": value === price,
                      }
                    )}
                    slotPrefix={
                      <SfRadio
                        className="flex items-center"
                        disabled={counter === 0}
                        value={value}
                        checked={price === value}
                        name="radio-price"
                        onChange={() =>
                          setPrice(price === value ? null : value)
                        }
                      />
                    }
                  >
                    <p>
                      <span className="mr-2 text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </p>
                  </SfListItem>
                ))}
              </fieldset>
            )}
            {section.type === "rating" && (
              <fieldset id="radio-rating">
                {section.details.map(({ id, label, value, counter }) => (
                  <SfListItem
                    key={id}
                    as="label"
                    size="sm"
                    className={classNames(
                      "!items-center py-4 md:py-1 bg-transparent hover:bg-transparent",
                      {
                        "font-medium": value === rating,
                      }
                    )}
                    slotPrefix={
                      <SfRadio
                        className="flex items-center"
                        value={value}
                        checked={rating === value}
                        name="radio-rating"
                        onChange={() =>
                          setRating(rating === value ? null : value)
                        }
                      />
                    }
                  >
                    <div className="flex flex-wrap items-center">
                      <SfRating
                        className="-mt-px"
                        value={Number(value)}
                        max={5}
                        size="sm"
                      />
                      <span className="mx-2 text-base md:text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </div>
                  </SfListItem>
                ))}
              </fieldset>
            )}
          </SfAccordionItem>
          <hr className="my-4" />
        </Fragment>
      ))}
      <div className="flex justify-between">
        <SfButton
          variant="secondary"
          className="w-full mr-3"
          onClick={handleClearFilters}
        >
          Clear all filters
        </SfButton>
        <SfButton className="w-full">Show products</SfButton>
      </div>
    </aside>
  );
};

export default FilterComponent;
