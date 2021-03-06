import { useGlobalContext } from '../context/global';
import { useRouter } from 'next/router';

const SidebarLeft = ({ children }) => {
  const { openSidebar_me_fi } = useGlobalContext();
  const { locale } = useRouter()
  return (
    <div
      className={`fixed top-0 bottom-0 h-full w-full sm:max-w-xs bg-white shadow-2xl transition-all duration-300 z-50 overflow-y-scroll ${
        openSidebar_me_fi
          ? 'translate-x-0 visible'
          : locale === 'en'
          ? '-translate-x-full invisible'
          : 'translate-x-full invisible'
      } ${locale === 'en' ? 'left-0' : 'right-0'}`}
    >
      {children}
    </div>
  );
};

export default SidebarLeft;
