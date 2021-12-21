import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useUserContext } from '../context/auth';
import { useToastContext } from '../context/toast';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import Breadcrumb from '../components/helpers/Breadcrumb';
import Button from '../components/helpers/RippleButton';

const Contact = () => {
  const { user } = useUserContext();
  const { dispatch } = useToastContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { pathname } = useRouter();
  const path = pathname.split('/').slice(1);

  useEffect(() => {
    if (user) {
      setName(`${user.firstname} ${user.lastname}`);
      setEmail(user.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: uuidv4(),
          type: 'danger',
          message: 'un authorized please login',
        },
      });
      return;
    }
    try {
      await axios.post('/api/message', { user: user._id, message });
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: uuidv4(),
          type: 'success',
          message: "you'll be contacted soon",
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: uuidv4(),
          type: 'danger',
          message: 'something went wrong',
        },
      });
    }
  };

  return (
    <>
      <Breadcrumb path={path} />
      <section className='container grid px-4 py-12 lg:grid-cols-[2fr,1fr]'>
        <div className='w-24 h-1 mx-auto mb-8 lg:col-span-2 bg-secondary'></div>
        <div className='sm:px-5'>
          <h1
            className={`capitalize text-secondary text-3xl sm:text-4xl font-semibold tracking-widest mb-2'
          `}
          >
            send us a message
          </h1>
          <div className='w-12 h-1 mb-6 bg-secondary'></div>
          <form
            className='grid gap-4 sm:grid-cols-2 sm:grid-rows-[auto,auto,auto]'
            onSubmit={handleSubmit}
          >
            <div className=''>
              <label className='block font-light text-gray-500 capitalize'>
                name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                defaultValue={name}
                placeholder='Enter Your Name'
                className='w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-primary'
              />
            </div>
            <div className=''>
              <label className='block font-light text-gray-500 capitalize'>
                email <span className='text-red-500'>*</span>
              </label>
              <input
                type='email'
                defaultValue={email}
                placeholder='Enter Your Email'
                className='w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-primary'
              />
            </div>
            <div className='sm:col-span-2'>
              <label className='block font-light text-gray-500 capitalize'>
                message
              </label>
              <textarea
                type='text'
                rows='4'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Write Your Message Here ...'
                className='w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-primary'
              />
            </div>
            <Button
              className='w-56 px-4 py-2 mt-4 tracking-wide uppercase btn-primary'
              type='submit'
            >
              send your message
            </Button>
          </form>
        </div>
        <div className='sm:px-5'>
          <h1
            className={`capitalize text-secondary text-3xl mt-8 lg:mt-0 sm:text-4xl font-semibold tracking-widest mb-2'
          `}
          >
            get office info
          </h1>
          <div className='w-8 h-1 mb-6 bg-secondary'></div>
          <p className='mb-6 text-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            ratione, perferendis quae at dicta dolores quidem accusantium!
          </p>
          <div className='flex items-center mb-6'>
            <FaMapMarkerAlt className='mr-6 text-xl text-paragraph' />
            <div>
              <h3
                className={`text-2xl text-paragraph font-semibold mb-2 tracking-widest'
              `}
              >
                our address :
              </h3>
              <p className='text-gray-500'>1234 Heaven Stress, Beverly Hill.</p>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <FaPhoneAlt className='mr-6 text-xl text-paragraph' />
            <div>
              <h3
                className={`text-2xl text-paragraph font-semibold mb-2 tracking-widest'
              `}
              >
                phone number :
              </h3>
              <p className='text-gray-500'>1234 567890.</p>
            </div>
          </div>
          <div className='flex items-center mb-6'>
            <FaEnvelope className='mr-6 text-xl text-paragraph' />
            <div>
              <h3
                className={`text-2xl text-paragraph font-semibold mb-2 tracking-widest'
              `}
              >
                email address :
              </h3>
              <p className='text-gray-500'>example@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
