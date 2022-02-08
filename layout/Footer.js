import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='flex items-center justify-center bg-black h-[5rem]'>
        <h5 className='text-white'>
          &copy; {new Date().getFullYear()}
          <span className='mx-2 capitalize text-secondary'>
            {t('common:my-name')}
          </span>
          {t('common:footer-rights')}
        </h5>
      </div>
      <div className='h-14 sm:hidden'></div>
    </>
  );
};

export default Footer;
