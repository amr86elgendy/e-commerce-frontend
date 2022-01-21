import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/helpers/Breadcrumb';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const path = pathname.split('/').slice(1);

  return (
    <>
      <Head>
        <title>i Shop | About Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Amr Elgendy' />
        <meta name='description' content='e-commerce website' />
      </Head>
      <Breadcrumb path={path} />
      <main className='grid gap-16 px-5 my-16 md:grid-cols-2'>
        <img
          src='charisse.jpg'
          alt='our story'
          className='block object-cover w-full rounded-md h-[500px]'
        />
        <article>
          <h1 className='mb-2.5'>
            {t('about:title-about-us')}
            {/* Our Story */}
          </h1>
          <div className='w-24 h-1 bg-secondary'></div>
          <p className='mx-5 mt-8 leading-loose text-gray-500 md:mx-0'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </main>
    </>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'])),
      // Will be passed to the page component as props
    },
  };
}