import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = ({ path }) => {
  
  return (
    <nav className='items-center hidden h-20 bg-gray-100 md:flex hover:bg-gray-50'>
      <div className='container'>
        <ul className='flex pl-4'>
          <li>
            <Link href='/'>
              <a className='mr-2 text-primary'>Home</a>
            </Link>
          </li>
          {path.map((name, i) => {
            if (i !== path.length - 1) {
              return (
                <li key={i}>
                  <Link href={'/' + name}>
                    <a className='mr-2 text-primary'>/ {name}</a>
                  </Link>
                </li>
              );
            } else {
              return <li key={i}>/ {name}</li>;
            }
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
