import useTheme from '../../hooks/useTheme';
import { FaPaintBrush } from 'react-icons/fa';

const Theme = () => {
  const { setThemeColor } = useTheme();

  const themeColor = [
    { primary: '#f43f5e', primaryDark: '#E11D48', primaryLightest: '#FFF1F2' },
    { primary: '#1D4ED8', primaryDark: '#1E40AF', primaryLightest: '#E0F2FE' },
    { primary: '#7C3AED', primaryDark: '#6D28D9', primaryLightest: '#F5F3FF' },
    { primary: '#16A34A', primaryDark: '#15803D', primaryLightest: '#F0FDF4' },
    { primary: '#F97316', primaryDark: '#EA580C', primaryLightest: '#FFF7ED' },
    { primary: '#a30101', primaryDark: '#DC2626', primaryLightest: '#FEF2F2' },
  ];

  return (
    <div className='fixed left-0 z-30 flex py-2 -translate-y-1/2 top-1/2 group'>
      <div className='flex items-center justify-center w-10 h-8 text-white rounded-r-full cursor-pointer bg-primary'>
        <FaPaintBrush />
      </div>
      <div className='absolute top-0 left-0 p-2 transition-all duration-200 -translate-x-full bg-black rounded-r group-hover:translate-x-0'>
        <ul className='flex'>
          <li className='mr-2 text-white capitalize whitespace-nowrap'>
            theme color
          </li>
          {themeColor.map((c, i) => (
            <li
              key={i}
              className='w-6 h-6 mx-1 transition-all duration-200 rounded-full cursor-pointer hover:scale-110'
              style={{ backgroundColor: c.primary }}
              onClick={() =>
                setThemeColor({
                  primary: c.primary,
                  primaryDark: c.primaryDark,
                  primaryLightest: c.primaryLightest,
                })
              }
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
