import { useEffect, useState } from 'react';
import { FaAngleDown, FaFilter, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context/global';
import { useFilterContext } from '../../context/filter';
import { sortListEN, sortListAR } from '../helpers/constant';
import useTranslation from 'next-translate/useTranslation';

const Sortbar = () => {
  const { t, lang } = useTranslation();
  const { dispatch, openFilter, openSortList } = useGlobalContext();
  const { sort, updateSort } = useFilterContext();
  const [openSort, setOpenSort] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    switch (lang) {
      case 'en': return setList([...sortListEN]);
      case 'ar': return setList([...sortListAR]);
    }
  }, [lang])

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
          {t('products:filter')}
        </div>
        {/* ############# */}
        <div
          className='text-sm cursor-pointer hover:text-primary md:text-base lg:hidden'
          onClick={() => dispatch('OPEN_SIDEBAR_FILTER')}
        >
          <FaFilter className='inline-block' /> {t('products:filter')}
        </div>
      </div>
      {/* END FILTER BUTTON */}
      {/* START GRID BUTTONS */}
      <div className='flex items-center justify-self-center'>
        <div
          className='hidden cursor-pointer ltr:mr-2 group md:block rtl:ml-2'
          onClick={() => dispatch('SET_LISTVIEW')}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className='w-8 mx-0.5 bg-gray-600 group-hover:bg-black transition-all duration-200 h-[5px] my-1'
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
        {t('products:sort-by')}{' '}
        <FaAngleDown
          className={`inline-block transition-all duration-200 rotate-180 ${
            openSortList && 'rotate-0'
          }`}
        />
      </div>
      {/* ################# */}
      <div
        className='relative items-center justify-around hidden w-48 p-2 text-sm text-center text-gray-600 border border-gray-200 cursor-pointer justify-self-end rounded-3xl hover:text-primary md:flex'
        onClick={() => setOpenSort(!openSort)}
      >
        {t(`products:${sort}`)}{' '}
        <FaAngleDown
          className={`inline-block transition-all duration-200 ${
            openSort && 'rotate-180'
          }`}
        />
        <ul
          className={`absolute left-auto z-40 w-11/12 transition-all duration-200 bg-white top-14 shadow-sort text-sm ${
            openSort
              ? 'opacity-100 visible scale-100'
              : 'scale-75 opacity-0 invisible'
          }`}
        >
          {list.map((li, i) => (
            <option
              key={i}
              className='py-3 text-sm text-gray-500 transition-all duration-200 ltr:text-left ltr:pl-3 hover:bg-gray-100 rtl:pr-3 rtl:text-right'
              value={li.value}
              onClick={updateSort}
            >
              {li.label}
            </option>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sortbar;
