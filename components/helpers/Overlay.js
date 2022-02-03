import { useGlobalContext } from '../../context/global';

const Overlay = () => {
  const { dispatch, openSidebar_lo_ca, openSortList, openSidebar_me_fi } =
    useGlobalContext();

  const close = () => {
    if (openSidebar_lo_ca) dispatch('CLOSE_SIDEBAR_LO_CA');
    if (openSidebar_me_fi) dispatch('CLOSE_SIDEBAR_ME_FI');
    if (openSortList) dispatch('TOGGLE_SORT_LIST');
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        openSidebar_lo_ca || openSortList || openSidebar_me_fi
          ? 'opacity-100 visible'
          : 'invisible opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0,0,0,.7)' }}
      onClick={close}
    ></div>
  );
};

export default Overlay;
