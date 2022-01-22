import axios from 'axios';
import { useQuery } from 'react-query';

export async function getProducts() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products`
  );
  return data;
}

// ##########################################################

export async function getProduct(productId) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/${productId}`
  );
  return data;
}

// ##########################################################

export async function getLatestProducts() {
  return await axios.get(`${process.env.URL}/api/products/new-arrival`);
}

export async function getBestSellerProducts() {
  return await axios.get(`${process.env.URL}/api/products/best-seller`);
}
