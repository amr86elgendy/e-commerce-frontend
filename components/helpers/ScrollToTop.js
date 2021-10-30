import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import classNames from 'classnames';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.pageYOffset >= 560 ? setShowBtn(true) : setShowBtn(false)
    );
  }, []);

  return (
    <div
      className={classNames(
        'fixed transition-all duration-500  sm:bottom-8 right-8 w-12 h-12 transform flex items-center justify-center cursor-pointer bg-white shadow-sort text-gray-600 rounded bottom-16',
        { 'visible translate-y-0': showBtn },
        { 'invisible translate-y-20': !showBtn }
      )}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <FaChevronUp size={18} />
    </div>
  );
};

export default ScrollToTop;
