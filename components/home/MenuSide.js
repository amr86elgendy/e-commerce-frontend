import useTranslation from 'next-translate/useTranslation';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/global';

const MenuSide = () => {
  const { dispatch } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <div>
      <div className='flex justify-between p-4 border-b'>
        <h3 className='tracking-wider uppercase text-primary'>{t('common:menu')}</h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('CLOSE_SIDEBAR_ME_FI')}
        />
      </div>
    </div>
  );
}

export default MenuSide
