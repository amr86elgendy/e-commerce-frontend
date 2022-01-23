
const MenuButton = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <div className='w-8 h-0.5 bg-gray-600 rounded mb-1'></div>
      <div className='w-5 h-0.5 bg-gray-600 rounded mb-1'></div>
      <div className='w-8 h-0.5 bg-gray-600 rounded'></div>
    </button>
  );
};

export default MenuButton;
