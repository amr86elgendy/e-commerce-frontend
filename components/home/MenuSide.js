import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/global';

const MenuSide = () => {
  const { dispatch } = useGlobalContext()
  return (
    <div>
      <div className='flex justify-between p-4 border-b'>
        <h3 className='tracking-wider uppercase text-primary'>menu</h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 transform cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('CLOSE_SIDEBAR_LEFT')}
        />
      </div>
    </div>
  );
}

export default MenuSide
