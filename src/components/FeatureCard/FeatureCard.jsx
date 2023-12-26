import React from 'react';
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
    icon: <SfIconPublishedWithChanges size="2xl" className='text-primary-blue' />,
    title: 'Free 30-Day returns',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
];

export default function FeatureCard() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap justify-center mt-20">
      {cardDetails.map(({ icon, title, description, buttonText, isDisabled }) => (
        <div key={title} className="flex flex-col w-full max-w-[325px] sm:w-[375px] lg:w-[496px] items-center">
          <span className={classNames(isDisabled && 'text-disabled-900')}>{icon}</span>
          <div className="p-4 flex flex-col items-center">
            <p className={classNames('font-medium typography-text-base', { 'text-disabled-900': isDisabled })}>
              {title}
            </p>
            <p
              className={classNames('mt-1 mb-4 font-normal typography-text-sm text-neutral-700 text-center', {
                'text-disabled-700': isDisabled,
              })}
            >
              {description}
            </p>
            <SfButton size="sm"  disabled={isDisabled} className="mt-auto  bg-primary-blue hover:bg-primary-blue-hover active:bg-primary-blue">
              {buttonText}
            </SfButton>
          </div>
        </div>
      ))}
    </div>
  );
}