import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Breadcrumb = ({ path }) => {
  const { t } = useTranslation();
  return (
    <nav className='items-center hidden h-20 bg-gray-100 md:flex hover:bg-gray-50'>
      <div className='container'>
        <ul className='flex ltr:pl-4 rtl:pr-4'>
          <li>
            <Link href='/'>
              <a className='ltr:mr-2 rtl:ml-2 text-primary'>
                {t('common:home')}
              </a>
            </Link>
          </li>
          {path.map((name, i) => {
            if (i !== path.length - 1) {
              return (
                <li key={i}>
                  <Link href={'/' + name}>
                    <a className='ltr:mr-2 rtl:ml-2 text-primary'>
                      / {name.includes('-') ? name : t(`common:${name}`)}
                    </a>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  / {name.includes('-') ? name : t(`common:${name}`)}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
