import axios from 'axios';

export const register = async (user) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/register`,
    user,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export const login = async (email, password) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/login`,
    { email, password },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
