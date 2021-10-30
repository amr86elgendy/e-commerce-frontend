
export const register = async (user) => {
  return await fetch(`${process.env.URL}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  // return await res.json();
};

export const login = async (email, password) => {
  const res = await fetch(`${process.env.URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
};
