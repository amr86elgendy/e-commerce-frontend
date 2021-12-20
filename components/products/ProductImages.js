import React, { useState } from 'react';

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div>
      <img
        src={`${process.env.NEXT_PUBLIC_APP_URL}${main}`}
        alt='image'
        className='block object-cover object-center w-full rounded h-80 md:h-[500px]'
      />
      <div className='grid grid-cols-5 mt-4 gap-x-4'>
        {images.map((image, index) => {
          return (
            <img
              src={`${process.env.NEXT_PUBLIC_APP_URL}${image}`}
              alt='image'
              key={index}
              className={
                image === main
                  ? 'border-2 border-primary-light h-12 sm:h-24 cursor-pointer'
                  : 'h-12 sm:h-24 cursor-pointer'
              }
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;