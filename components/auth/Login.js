import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/global';
import Button from '../helpers/RippleButton'
import Register from './Register';

const Login = () => {
  const [authStatus, setAuthStatus] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { dispatch } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  
  return (
    <div className='w-full overflow-hidden'>
      <form
        className={`absolute top-0 left-0 transition-all transform duration-300
        ${
          authStatus === 'login'
            ? 'translate-x-0 visible pointer-events-auto'
            : 'translate-x-full invisible pointer-events-none'
        }
      `}
        onSubmit={handleSubmit}
      >
        <div className='flex justify-between p-4 border-b'>
          <h3 className='tracking-wider uppercase text-primary'>login</h3>
          <AiOutlineClose
            className='text-xl transition-all duration-300 transform cursor-pointer hover:rotate-180 ease'
            onClick={() => dispatch('CLOSE_SIDEBAR_RIGHT')}
          />
        </div>
        <div className='p-4 mt-3'>
          <label className='font-light text-gray-500'>
            Email or Username
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            className={
              error.includes('email')
                ? 'w-full mt-2 p-2 border outline-none border-red-600'
                : 'w-full mt-2 p-2 border outline-none border-gray-300'
            }
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
          />
          <small className='text-red-600 capitalize'>
            {error.includes('email') && error}
          </small>
        </div>
        <div className='p-4'>
          <label className='font-light text-gray-500'>
            Password
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            className={
              error.includes('password')
                ? 'w-full mt-2 p-2 border outline-none border-red-600'
                : 'w-full mt-2 p-2 border outline-none border-gray-300'
            }
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
          <small className='text-red-600 capitalize'>
            {error.includes('password') && error}
          </small>
        </div>
        <div className='p-4'>
          <Button
            className='w-full px-4 py-2 my-2 tracking-wide uppercase btn-primary'
            type='submit'
          >
            sign in
          </Button>
          <h5 className='my-4'>
            New customer?
            <span
              className='inline-block ml-2 text-xs cursor-pointer sm:text-sm text-primary'
              onClick={() => setAuthStatus('register')}
            >
              Create your account
            </span>
          </h5>
        </div>
      </form>
      <Register authStatus={authStatus} setAuthStatus={setAuthStatus} />
    </div>
  );
};

export default Login;
