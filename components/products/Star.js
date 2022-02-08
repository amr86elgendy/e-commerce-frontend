import useTranslation from "next-translate/useTranslation";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Star = ({ rating, numReviews }) => {
  const { t } = useTranslation();

  let arr = Array.from({ length: 5 }, (_, i) => {
    if (rating > i + 1) return 1;
    if (rating < i + 1) return 0;
    else return 0.5;
  });

  return (
    <div className='flex'>
      {arr.map((el, i) => {
        if (el === 0)
          return <BsStar key={i} className='text-[#FFDE00] m-0.5' />;
        if (el === 0.5)
          return <BsStarHalf key={i} className='text-[#FFDE00] m-0.5' />;
        if (el === 1)
          return <BsStarFill key={i} className='text-[#FFDE00] m-0.5' />;
      })}
      {numReviews !== undefined && (
        <span className='ltr:ml-2 rtl:mr-2'>
          ({numReviews} {t('products:reviews')})
        </span>
      )}
    </div>
  );
};

export default Star;
