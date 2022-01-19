import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleShowBtn = () =>
    window.pageYOffset >= 560 ? setShowBtn(true) : setShowBtn(false);

  useEffect(() => {
    window.addEventListener('scroll', handleShowBtn);
    return () => window.removeEventListener('scroll', handleShowBtn);
  }, []);

  return (
    <div
      className={`fixed transition-all duration-500  sm:bottom-8 right-8 w-12 h-12 flex items-center justify-center cursor-pointer bg-white shadow-sort text-gray-600 rounded bottom-16 ${
        showBtn ? 'visible translate-y-0' : 'invisible translate-y-20'
      }`}
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
