import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context/global';
import { sortList } from '../components/helpers/constant';

const SortList = () => {
  const { dispatch, openSortList } = useGlobalContext();
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white ${
        openSortList ? 'translate-y-0 visible' : 'translate-y-full invisible'
      }`}
    >
      <div className='flex justify-between p-4 border-b'>
        <h3 className='uppercase text-primary'>sort by</h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('TOGGLE_SORT_LIST')}
        />
      </div>
      <ul>
        {sortList.map((li, i) => (
          <li
            key={i}
            className='py-4 pl-4 text-gray-500 transition-all duration-200 cursor-pointer hover:bg-primary-light hover:text-primary'
          >
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortList;
