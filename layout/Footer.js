import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='flex items-center justify-center bg-black h-[5rem]'>
        <h5 className='text-white'>
          &copy; {new Date().getFullYear()}
          <span className='mx-2 italic text-secondary'>amr elgendy</span>
          All rights reserved
        </h5>
      </div>
      <div className="h-14 sm:hidden"></div>
    </>
  );
};

export default Footer;
