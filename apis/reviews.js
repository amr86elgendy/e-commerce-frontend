import axios from 'axios';

export const createReview = async (slug, token, review) => {
  return await axios.post(`${process.env.URL}/api/products/${slug}/review`, review, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}