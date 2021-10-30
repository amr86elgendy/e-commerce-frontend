import { useGlobalContext } from '../context/global';

const SidebarRight = ({ children }) => {
  const { openSidebarRight } = useGlobalContext();
  return (
    <aside
      className={`fixed top-0 bottom-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl transition-all duration-300 z-50 transform ${
        openSidebarRight
          ? 'translate-x-0 visible'
          : 'translate-x-full invisible'
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarRight;
