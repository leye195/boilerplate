import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

const CustomHead = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="" />
        <meta name="keywords" content="" />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
      </Head>
    </>
  );
};

export default CustomHead;
