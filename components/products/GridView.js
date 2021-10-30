import React from 'react'
import ProductCard from './ProductCard';

const GridView = ({ grid, products }) => {
  return (
    <div
      className={`grid grid-cols-${grid ? grid : '1'} sm:grid-cols-${
        grid ? grid : '2'
      } md:grid-cols-${grid ? grid : '3'} lg:grid-cols-${
        grid ? grid : '4'
      } gap-y-10 gap-x-6 xl:gap-x-8 my-8`}
    >
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}

export default GridView
