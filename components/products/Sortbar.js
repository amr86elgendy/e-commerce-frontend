import { useState } from 'react';
import { FaAngleDown, FaFilter, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context/global';
import { useFilterContext } from '../../context/filter';
import { sortList } from '../helpers/constant';

const Sortbar = () => {
  const { dispatch, openFilter } = useGlobalContext();
  const { sort, updateSort } = useFilterContext();
  const [openSort, setOpenSort] = useState(false);

  return (
    <div className='grid items-center grid-cols-3 py-4'>
      {/* FILTER BUTTON */}
      <div className='capitalize'>
        <div
          className='hidden text-sm cursor-pointer hover:text-primary md:text-base lg:inline'
          onClick={() => dispatch('TOGGLE_FILTER')}
        >
          {openFilter ? (
            <FaTimes className='inline-block' />
          ) : (
            <FaFilter className='inline-block' />
          )}{' '}
          filter
        </div>
        {/* ############# */}
        <div
          className='text-sm cursor-pointer hover:text-primary md:text-base lg:hidden'
          onClick={() => dispatch('OPEN_SIDEBAR_FILTER')}
        >
          <FaFilter className='inline-block' /> filter
        </div>
      </div>
      {/* END FILTER BUTTON */}
      {/* START GRID BUTTONS */}
      <div className='flex justify-self-center'>
        <div
          className='mr-1 border border-gray-700 cursor-pointer md:mr-2 group'
          onClick={() => dispatch('SET_LISTVIEW')}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className='w-8 m-0.5 bg-gray-600 group-hover:bg-black transition-all duration-200 h-[5px]'
            ></div>
          ))}
        </div>
        {Array.from({ length: 4 }, (_, i) => Array.from({ length: i + 1 })).map(
          (one, i) => (
            <div
              key={i}
              className={`md:mx-2 border border-gray-700 cursor-pointer group mx-1 ${
                i === 0
                  ? 'flex sm:hidden'
                  : i + 1 > 2 && i + 1 < 4
                  ? 'hidden md:flex'
                  : i + 1 >= 4
                  ? 'hidden lg:flex'
                  : 'flex'
              }`}
              onClick={() => dispatch('SET_GRIDVIEW', i + 1)}
            >
              {one.map((_, idx) => (
                <div
                  key={idx}
                  className='w-2.5 h-5 bg-gray-600 m-0.5 group-hover:bg-black transition-all duration-200'
                ></div>
              ))}
            </div>
          )
        )}
      </div>
      {/* END GRID BUTTONS */}
      {/* SORT LIST */}
      <div
        className='block text-sm capitalize cursor-pointer justify-self-end hover:text-primary md:hidden'
        onClick={() => dispatch('TOGGLE_SORT_LIST')}
      >
        sort by{' '}
        <FaAngleDown
          className={`inline-block transition-all duration-200 ${
            openSort && 'rotate-180'
          }`}
        />
      </div>
      {/* ################# */}
      <div
        className='relative hidden w-48 p-2 text-center text-gray-600 border border-gray-200 cursor-pointer justify-self-end rounded-3xl hover:text-primary md:block'
        onClick={() => setOpenSort(!openSort)}
      >
        {sort}{' '}
        <FaAngleDown
          className={`inline-block transition-all duration-200 ${
            openSort && 'rotate-180'
          }`}
        />
        <ul
          className={`absolute left-auto z-40 w-11/12 transition-all duration-200 bg-white top-14 shadow-sort ${
            openSort
              ? 'opacity-100 visible scale-100'
              : 'scale-75 opacity-0 invisible'
          }`}
        >
          {sortList.map((li, i) => (
            <option
              key={i}
              className='py-3 pl-3 text-sm text-left text-gray-500 transition-all duration-200 hover:bg-gray-100'
              value={li}
              onClick={updateSort}
            >
              {li}
            </option>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sortbar;
