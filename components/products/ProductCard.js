import Link from 'next/link';
import Image from 'next/image'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import { useCartContext } from '../../context/cart';
import { useWishlistContext } from '../../context/wishlist';
import { useToastContext } from '../../context/toast';
import { v4 as uuidv4 } from 'uuid';

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    colors,
    price,
    images,
    quantity,
    slug,
  } = product;

  const { addToCart, cart } = useCartContext();
  const { addToWishlist, wishlist, removeItemFromWishlist } =
    useWishlistContext();
  const { dispatch } = useToastContext();

  const cartTooltip = (name) => {
    const existed = cart.find((item) => item.name === name);
    if (existed) return true;
    else return false;
  };

  const wishlistTooltip = (_id) => {
    const existed = wishlist.find((item) => item._id === _id);
    if (existed) return true;
    else return false;
  };

  const handleToogleCart = (_id, colors, name, product) => {
    const existed = cart.find((item) => item.name === name);
    if (existed) {
      return;
    } else {
      addToCart(_id, colors[0], 1, product);
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: uuidv4(),
          type: 'success',
          message: 'successfully added',
        },
      });
    }
  };

  const handleToogleWishlist = (_id, product) => {
    const existed = wishlist.find((item) => item._id === _id);
    if (existed) {
      removeItemFromWishlist(_id);
    } else {
      addToWishlist(product);
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: uuidv4(),
          type: 'success',
          message: 'successfully added',
        },
      });
    }
  };
console.log(images);
  return (
    <div className='relative card'>
      <figure className='relative w-full overflow-hidden min-h-80'>
        <Image
          src={`${process.env.NEXT_PUBLIC_APP_URL}/${images[0]}`}
          alt={name}
          width={350}
          height={400}
          layout='responsive'
          className='object-cover object-center w-full h-full transition-all duration-1000 ease-in-out lg:w-full lg:h-full'
        />
        <ul className='absolute top-2.5 right-2.5'>
          <button
            className='relative flex items-center justify-center w-10 h-10 m-1 text-white transition-transform duration-500 translate-x-16 rounded-full cursor-pointer group bg-primary focus:outline-none'
            onClick={() => handleToogleCart(_id, colors, name, product)}
            disabled={quantity === 0}
          >
            <FiShoppingCart className='text-lg' />
            <span
              className={
                quantity === 0
                  ? 'hidden'
                  : `absolute right-12 top-1/2 whitespace-nowrap py-1 px-1.5 bg-primary-light rounded pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-black -translate-x-5 group-hover:translate-x-0 -translate-y-1/2 transition duration-500 text-xs`
              }
            >
              {cartTooltip(name) ? 'Added' : 'Add To Cart'}
            </span>
          </button>
          <button
            className='relative flex items-center justify-center w-10 h-10 m-1 text-white transition-transform duration-500 delay-150 translate-x-16 rounded-full cursor-pointer group bg-primary focus:outline-none'
            onClick={() => handleToogleWishlist(_id, product)}
          >
            {wishlistTooltip(_id) ? (
              <FaHeart className='text-lg' />
            ) : (
              <FaRegHeart className='text-lg' />
            )}
            <span className='absolute right-12 top-1/2 whitespace-nowrap py-1 px-1.5 bg-primary-light rounded pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-black -translate-x-5 group-hover:translate-x-0 -translate-y-1/2 transition duration-500 text-xs'>
              {wishlistTooltip(_id) ? 'Added' : 'Add To Wishlist'}
            </span>
          </button>
          <Link href={`/products/${slug}?id=${_id}`}>
            <button className='relative flex items-center justify-center w-10 h-10 m-1 text-white transition-transform duration-500 delay-300 translate-x-16 rounded-full cursor-pointer group bg-primary focus:outline-none'>
              <BsEye className='text-lg' />
              <span className='absolute right-12 top-1/2 whitespace-nowrap py-1 px-1.5 bg-primary-light rounded pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-black -translate-x-5 group-hover:translate-x-0 -translate-y-1/2 transition duration-500 text-xs'>
                view details
              </span>
            </button>
          </Link>
        </ul>
      </figure>
      <div className='p-2.5'>
        <div className='my-2'>
          <p className='mt-2 mb-3 leading-tight text-center'>{name}</p>
        </div>

        <h4 className='my-2 text-center text-gray-500 hover:text-primary'>
          $ {price}
        </h4>
        <div className='flex justify-center'>
          {colors.map((c, i) => (
            <div
              key={i}
              className='w-4 h-4 mx-0.5 rounded-full'
              style={{ backgroundColor: c }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
