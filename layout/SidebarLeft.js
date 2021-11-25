import { useGlobalContext } from "../context/global";

const SidebarLeft = ({ children }) => {
  const { openSidebarLeft } = useGlobalContext();
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 h-full w-full max-w-xs bg-white shadow-2xl transition-all duration-300 z-50 overflow-y-scroll ${
        openSidebarLeft
          ? 'translate-x-0 visible'
          : '-translate-x-full invisible'
      }`}
    >
      {children}
    </div>
  );
};

export default SidebarLeft;
