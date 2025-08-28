// components/Modal.tsx

import Image from 'next/image';
import React from 'react';
import SuccessIcon from '../../../public/images/message-success.png';
import FailedIcon from '../../../public/images/message-failed.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, isSuccess }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex bg-transparent" style={{ zIndex: 1000 }}>
      <div className="bg-white rounded-xl shadow-lg w-[30rem] h-[25rem] relative m-auto" style={{ zIndex: 1001 }}>
        <div className={`flex justify-center mb-4 ${isSuccess ? 'bg-[#F3B64C]' : 'bg-[#E9EAEB]'} rounded-t-xl h-1/2`}>
          {/* Ilustrasi Amplop dan Balon */}
          <div className="relative w-32 h-32">
            {isSuccess ? (
              <Image
                src={SuccessIcon}
                width={350}
                height={350}
                alt="Message Sent"
                className="absolute -bottom-3 object-contain scale-200"
              />
            ) : (
              <Image
                src={FailedIcon}
                width={350}
                height={350}
                alt="Message Failed"
                className="absolute -bottom-8 object-contain scale-180"
              />
            )}
          </div>
        </div>

        {isSuccess ? (
          <div className='absolute bottom-6 px-4 flex flex-col gap-4'>
            <h2 className="text-xl font-bold text-center text-black">
              Got Your Message!
            </h2>
            <p className="text-gray-600 text-center mb-5">
              Really appreciate you reaching out. Ill be in touch soon. 
            </p>

            <button 
              onClick={onClose}
              className="w-full py-3 rounded-full text-white font-semibold transition-colors bg-[#B76080] hover:bg-[#974e69] focus:outline-none"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className='absolute bottom-6 px-4 flex flex-col gap-4'>
            <h2 className="text-xl font-bold text-center text-black">
              Message Failed to Send!
            </h2>
            <p className="text-gray-600 text-center">
              Sorry about that. Please check your connection and try again.
            </p>

            <button onClick={onClose}
              className="w-full py-3 rounded-full text-white font-semibold transition-colors bg-[#B76080] hover:bg-[#974e69] focus:outline-none"
            >
              Try Again!
            </button>
          </div>
        )}
      </div>
      <div className='fixed top-0 bottom-0 inset-0 bg-black opacity-50'></div>
    </div>
  );
};

export default Modal;