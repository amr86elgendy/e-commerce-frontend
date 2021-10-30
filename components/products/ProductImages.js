import React, { useState } from 'react';

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div>
      <img
        src={main}
        alt='image'
        className='w-full h-80 md:h-500 block rounded object-cover object-center'
      />
      <div className='mt-4 grid grid-cols-5 gap-x-4'>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt='image'
              key={index}
              className={
                image === main
                  ? 'border-2 border-secondary h-12 sm:h-24 cursor-pointer'
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