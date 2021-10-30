import axios from 'axios'


export async function getAllProducts() {
  return await axios.get(`${process.env.URL}/api/products`);
}

export async function getSingleProduct(slug) {
  return await axios.get(`${process.env.URL}/api/products/${slug}`);
}

export async function getNewArrivalProducts() {
  return await axios.get(`${process.env.URL}/api/products/new-arrival`);
  
}

export async function getBestSellerProducts() {
  return await axios.get(`${process.env.URL}/api/products/best-seller`);
}