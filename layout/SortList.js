import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context/global';
import { sortListEN, sortListAR } from '../components/helpers/constant';
import { useFilterContext } from '../context/filter';
import useTranslation from 'next-translate/useTranslation';

const SortList = () => {
  const { t, lang } = useTranslation();
  const { dispatch, openSortList } = useGlobalContext();
  const { updateSort } = useFilterContext();
  const [list, setList] = useState([]);

  useEffect(() => {
    switch (lang) {
      case 'en': return setList(sortListEN);
      case 'ar': return setList(sortListAR);
    }
  }, [lang]);
  
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white ${
        openSortList ? 'translate-y-0 visible' : 'translate-y-full invisible'
      }`}
    >
      <div className='flex justify-between p-4 border-b'>
        <h3 className='uppercase text-primary'>{t('products:sort-by')}</h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('TOGGLE_SORT_LIST')}
        />
      </div>
      <ul>
        {list.map((li, i) => (
          <option
            key={i}
            className='py-4 text-gray-500 transition-all duration-200 cursor-pointer ltr:pl-4 hover:bg-primary-light hover:text-primary rtl:pr-4'
            value={li.value}
            onClick={(e) => {
              updateSort(e);
              dispatch('TOGGLE_SORT_LIST')
            }}
          >
            {li.label}
          </option>
        ))}
      </ul>
    </div>
  );
};

export default SortList;
