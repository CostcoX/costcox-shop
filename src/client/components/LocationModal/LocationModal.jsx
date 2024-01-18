// MyModal.js
import React from 'react';
import { SfModal } from '@storefront-ui/react';

const LocationModal = ({ isOpen, onClose }) => {
  return (
    <SfModal isOpen={isOpen} onClose={onClose} className='z-0 relative '>
      {/* Modal content goes here */}
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-4">My Modal</h1>
        <p>This is the content of my modal.</p>
      </div>
    </SfModal>
  );
};

export default LocationModal;
