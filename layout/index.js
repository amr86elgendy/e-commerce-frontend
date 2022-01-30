import Login from '../components/auth/Login';
import Overlay from '../components/helpers/Overlay';
import Theme from '../components/helpers/Theme';
import CartSide from '../components/cart/CartSide';
import FilterSide from '../components/products/FilterSide';
import MenuSide from '../components/home/MenuSide';
import Footbar from './Footbar';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarRight from './SidebarRight';
import Topbar from './Topbar';
import SortList from './SortList';
import SidebarLeft from './SidebarLeft';
import ScrollToTop from '../components/helpers/ScrollToTop';
import Toast from '../components/helpers/Toast';
import { useGlobalContext } from '../context/global';

const Layout = ({ children }) => {
  const { inside } = useGlobalContext();
  return (
    <>
      <Topbar />
      <Navbar />
      <Theme />
      <SidebarRight>
        {inside === 'login' ? <Login /> : inside === 'cart' ? <CartSide /> : ''}
      </SidebarRight>
      <SortList />
      <SidebarLeft>
        {inside === 'filter' ? (
          <FilterSide />
        ) : inside === 'menu' ? (
          <MenuSide />
        ) : (
          ''
        )}
      </SidebarLeft>
      <Overlay />
      {children}
      <Toast />
      <ScrollToTop />
      <Footbar />
      <Footer />
    </>
  );
};

export default Layout;
