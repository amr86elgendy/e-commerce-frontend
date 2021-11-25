import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ImSpinner8 } from 'react-icons/im';
import { useRouter } from 'next/router';
import Button from '../helpers/RippleButton';
import { useGlobalContext } from '../../context/global';

const Register = ({ authStatus, setAuthStatus }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // const user = { username, email, password };
    // const res = await register(user);
    // if (res.status !== 200) {
    //   const errors = await res.json();
    //   setLoading(false);
    //   setError(errors);
    // } else {
    //   const data = await res.json();
    //   setLoading(false);
    //   dispatch({ type: 'LOGIN', payload: data });
    //   localStorage.setItem('user', JSON.stringify(data));
    // }
  };

  return (
    <form
      className={`absolute top-0 left-0 transition-all duration-300
        ${
          authStatus === 'register'
            ? 'translate-x-0 visible pointer-events-auto'
            : 'translate-x-full invisible pointer-events-none'
        }
      `}
      onSubmit={handleSubmit}
    >
      <div className='flex justify-between p-4 border-b'>
        <h3 className='font-semibold tracking-wider uppercase text-primary'>
          register
        </h3>
        <AiOutlineClose
          className='text-xl transition-all duration-300 cursor-pointer hover:rotate-180 ease'
          onClick={() => dispatch('CLOSE_SIDEBAR_RIGHT')}
        />
      </div>
      <div className='px-4 py-2 mt-3'>
        <label className={`font-light text-gray-500`}>Username</label>
        <input
          type='text'
          className={`w-full mt-2 p-2 border outline-none ${
            error && error.username ? 'border-red-600' : 'border-gray-300'
          }`}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError({ ...error, username: null });
          }}
        />
        <small className='text-red-600 capitalize'>
          {error && error.username && error.username.message}
        </small>
      </div>

      <div className='px-4 py-2'>
        <label className='font-light text-gray-500'>
          Email
          <span className='text-red-500'>*</span>
        </label>
        <input
          type='email'
          className={`w-full mt-2 p-2 border outline-none ${
            error && error.email ? 'border-red-600' : 'border-gray-300'
          }`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError({ ...error, email: null });
          }}
        />
        <small className='text-red-600 capitalize'>
          {error && error.email && error.email.message}
        </small>
      </div>
      <div className='px-4 py-2'>
        <label className={`font-light text-gray-500`}>
          Password
          <span className='text-red-500'>*</span>
        </label>
        <input
          type='password'
          className={`w-full mt-2 p-2 border outline-none ${
            error && error.password ? 'border-red-600' : 'border-gray-300'
          }`}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError({ ...error, password: null });
          }}
        />
        <small className='text-red-600 capitalize'>
          {error && error.password && error.password.message}
        </small>
      </div>
      <div className='p-4'>
        <Button className='w-full px-4 py-2 my-2 btn-primary' type='submit'>
          Register
        </Button>
        <h5 className='my-4 text-sm'>
          Already have an account?
          <span
            className='inline-block ml-2 text-xs cursor-pointer sm:text-sm text-primary'
            onClick={() => setAuthStatus('login')}
          >
            Login here
          </span>
        </h5>
      </div>
    </form>
  );
};

export default Register;
