import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import { useToastContext } from '../../context/toast';

const Toast = () => {
  const { state, dispatch } = useToastContext();

  return (
    <div className='fixed bottom-8 right-8'>
      {state.map((noti, i) => {
        setInterval(() => {
          dispatch({
            type: 'DELETE_NOTIFICATION',
            payload: noti.id,
          });
        }, 4000);

        return (
          <div
            key={noti.id}
            className='flex justify-between h-20 px-5 mb-4 transition-all duration-300 bg-white border-l-8 rounded-md shadow w-80 animate-toast'
            style={{
              borderColor: noti.type === 'success' ? 'green' : 'red',
            }}
          >
            <div className='self-center'>
              {noti.type === 'success' ? (
                <FaCheckCircle color='green' size={25} />
              ) : (
                <FaExclamationTriangle color='red' size={25} />
              )}
            </div>
            <div className='self-center flex-1 ml-4'>
              <p className='font-semibold'>{noti.type}</p>
              <p className='text-xs tracking-wide capitalize'>{noti.message}</p>
            </div>
            <FaTimes
              className='mt-2 cursor-pointer'
              color='gray'
              onClick={() =>
                dispatch({
                  type: 'DELETE_NOTIFICATION',
                  payload: noti.id,
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
