import React, { useState } from 'react';
import { SfButton, SfIconPackage, SfIconWarehouse, SfIconPublishedWithChanges } from '@storefront-ui/react';
import classNames from 'classnames';

const cardDetails = [
  {
    icon: <SfIconPackage size="2xl" />,
    title: 'Free shipping',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: <SfIconWarehouse size="2xl" />,
    title: 'Click & Collect',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: <SfIconPublishedWithChanges size="2xl" className='text-green-700' />,
    title: 'Free 30-Day returns',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
];

export default function FeatureCard({items}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto mt-3">
      <p className='text-xl font-bold text-center'>Frequently Asked Questions</p>
    {items.map((item, index) => (
      <div key={index} className="mb-4 mt-5">
        <div
          className="bg-gray-200 cursor-pointer p-4 rounded-md  "
          onClick={() => handleClick(index)}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                index === activeIndex ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        {index === activeIndex && (
          <div className="bg-[#80cbd8] p-4 mt-2 rounded-md">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  );
}