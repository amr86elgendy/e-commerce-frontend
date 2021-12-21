import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

const login = async (user) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/login`,
    user
  );
  return data;
};

export function useLogin() {
  return useMutation(login);
}

// ##########################################################

const register = async (user) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/register`,
    user
  );
  return data;
};

export function useRegister() {
  return useMutation(register);
}

// ##########################################################

export const showMe = async (token) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/users/showMe`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

// ##########################################################

export const logout = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/logout`
  );
  return data;
};
