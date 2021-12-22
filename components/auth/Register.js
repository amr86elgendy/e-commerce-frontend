import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../helpers/RippleButton';
import { useGlobalContext } from '../../context/global';
import { useUserContext } from '../../context/user';
import { useRegister } from '../../apis/auth';

const Register = ({ authStatus, setAuthStatus }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: register, isLoading, isError, error } = useRegister();

  function checkError(str) {
    const { msg } = error.response.data;
    return msg.toLowerCase().includes(str);
  }

  const { dispatch: dispatchGlobal } = useGlobalContext();
  const { dispatch: dispatchAuth } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(
      { name, email, password },
      {
        onSuccess: (data) => {
          dispatchAuth('LOGIN', data);
          dispatchGlobal('CLOSE_SIDEBAR_RIGHT');
        },
      }
    );
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
        <label className={`font-light text-gray-500`}>Name</label>
        <input
          type='text'
          className={`w-full mt-2 p-2 border outline-none ${
            isError && checkError('name') ? 'border-red-600' : 'border-gray-300'
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <small className='text-red-600 capitalize'>
          {isError && checkError('name') && error.response.data.msg}
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
            isError && checkError('email')
              ? 'border-red-600'
              : 'border-gray-300'
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className='text-red-600 capitalize'>
          {isError && checkError('email') && error.response.data.msg}
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
            isError && checkError('password')
              ? 'border-red-600'
              : 'border-gray-300'
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className='text-red-600 capitalize'>
          {isError && checkError('password') && error.response.data.msg}
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
