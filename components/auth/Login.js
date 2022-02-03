import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/global';
import { useUserContext } from '../../context/user';
import { useLogin } from '../../apis/auth';
import Button from '../helpers/RippleButton'
import Register from './Register';

const Login = () => {
  const { t } = useTranslation()
  const [authStatus, setAuthStatus] = useState('login');
  const [email, setEmail] = useState('amr@tawfik.com');
  const [password, setPassword] = useState('123456');
  const { mutate: login, isLoading, isError, error } = useLogin()
  
  const { dispatch: dispatchGlobal } = useGlobalContext();
  const { dispatch: dispatchAuth } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password }, {
      onSuccess: (data) => {
        dispatchAuth('LOGIN', data);
        localStorage.setItem('ishop-token', data.token)
        dispatchGlobal('CLOSE_SIDEBAR_LO_CA');
      }
    });
  };
  
  return (
    <div className='w-full overflow-hidden'>
      <form
        className={`absolute top-0 left-0 transition-all duration-300 w-full
        ${
          authStatus === 'login'
            ? 'translate-x-0 visible pointer-events-auto'
            : 'ltr:translate-x-full rtl:-translate-x-full invisible pointer-events-none'
        }
      `}
        onSubmit={handleSubmit}
      >
        <div className='flex justify-between p-4 border-b'>
          <h3 className='tracking-wider uppercase text-primary'>
            {t('auth:login')}
          </h3>
          <AiOutlineClose
            className='text-xl transition-all duration-300 cursor-pointer hover:rotate-180 ease'
            onClick={() => dispatchGlobal('CLOSE_SIDEBAR_LO_CA')}
          />
        </div>
        <div className='p-4 mt-3'>
          <label className='font-light text-gray-500 capitalize'>
            {t('auth:email')}
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            className={
              isError
                ? 'w-full mt-2 p-2 border outline-none border-red-600'
                : 'w-full mt-2 p-2 border outline-none border-gray-300'
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className='text-red-600 capitalize'>
            {isError && error.response.data.msg}
          </small>
        </div>
        <div className='p-4'>
          <label className='font-light text-gray-500 capitalize'>
            {t('auth:password')}
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            className={
              isError
                ? 'w-full mt-2 p-2 border outline-none border-red-600'
                : 'w-full mt-2 p-2 border outline-none border-gray-300'
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className='text-red-600 capitalize'>
            {isError && error.response.data.msg}
          </small>
        </div>
        <div className='p-4'>
          <Button
            className='w-full px-4 py-2 my-2 tracking-wide uppercase btn-primary'
            type='submit'
          >
            {t('auth:sign-in')}
          </Button>
          <h5 className='my-4'>
            {t('auth:new-customer')}
            <span
              className='inline-block text-xs cursor-pointer ltr:ml-2 rtl:mr-2 sm:text-sm text-primary'
              onClick={() => setAuthStatus('register')}
            >
              {t('auth:create-new-account')}
            </span>
          </h5>
        </div>
      </form>
      <Register authStatus={authStatus} setAuthStatus={setAuthStatus} />
    </div>
  );
};

export default Login;
