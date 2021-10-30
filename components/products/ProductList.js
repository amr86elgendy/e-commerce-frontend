import React from 'react';
import { useFilterContext } from '../../context/filter';
import { useGlobalContext } from '../../context/global';
import ListView from './ListView';
import GridView from './GridView';

const ProductList = () => {
  const { grid, listView } = useGlobalContext();
  const { filtered_products: products } = useFilterContext();

  if (products.length < 1)
    return (
      <h5 className='px-5 text-lg font-semibold'>
        Sorry, no products matched your search.
      </h5>
    );
  if (listView) return <ListView products={products} />;
  return <GridView grid={grid} products={products} />
};

export default ProductList;
