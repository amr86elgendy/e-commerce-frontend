import { useGlobalContext } from '../../context/global';

const Overlay = () => {
  const { dispatch, openSidebarRight, openSortList, openSidebarLeft } =
    useGlobalContext();

  const close = () => {
    if (openSidebarRight) dispatch('CLOSE_SIDEBAR_RIGHT');
    if (openSidebarLeft) dispatch('CLOSE_SIDEBAR_LEFT');
    if (openSortList) dispatch('TOGGLE_SORT_LIST');
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        openSidebarRight || openSortList || openSidebarLeft
          ? 'opacity-100 visible'
          : 'invisible opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0,0,0,.7)' }}
      onClick={close}
    ></div>
  );
};

export default Overlay;
