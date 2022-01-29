import { useGlobalContext } from '../context/global';
import { useRouter } from 'next/router';

const SidebarRight = ({ children }) => {
  const { openSidebarRight } = useGlobalContext();
  const { locale } = useRouter();
  return (
    <aside
      className={`fixed top-0 bottom-0 h-full w-full sm:max-w-xs bg-white shadow-2xl transition-all duration-300 z-50 ${
        openSidebarRight
          ? 'translate-x-0 visible'
          : locale === 'en'
          ? 'translate-x-full invisible'
          : '-translate-x-full invisible'
      } ${locale === 'en' ? 'right-0' : 'left-0'}`}
    >
      {children}
    </aside>
  );
};

export default SidebarRight;
