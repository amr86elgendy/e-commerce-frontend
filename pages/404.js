import React from 'react';
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='flex flex-col justify-center items-center text-center min-h-page'>
      <h1 className='text-5xl mb-4 font-bold'>404</h1>
      <h3 className='text-2xl mb-8'>
        Oooops, the page you tried cannot be found
      </h3>
      <Link href='/'>
        <a className='capitalize py-1 px-3 bg-secondary text-white rounded hover:bg-third transition-all duration-300'>
          Back Home
        </a>
      </Link>
    </main>
  );
};

export default NotFound;
