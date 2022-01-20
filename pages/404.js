import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='flex flex-col items-center justify-center text-center min-h-page'>
      <h1 className='mb-4 text-5xl'>404</h1>
      <h2 className='mb-8'>
        Oooops, the page you tried cannot be found
      </h2>
      <Link href='/'>
        <a className='px-3 py-1 text-white capitalize transition-all duration-300 rounded bg-secondary hover:bg-third'>
          Back Home
        </a>
      </Link>
    </main>
  );
};

export default NotFound;
