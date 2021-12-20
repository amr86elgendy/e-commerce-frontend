import React from 'react'

const Header = () => {
  return (
    <section className='h-screen'>
      <img
        src={`${process.env.NEXT_PUBLIC_APP_URL}/uploads/albany sectional.jpg`}
        alt=''
        className='h-full min-w-full'
      />
    </section>
  );
}

export default Header
