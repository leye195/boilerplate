import React from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

type Props = {
  children: React.ReactNode | JSX.Element | React.ReactChild;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header className="h-10 w-full bg-slate-400 fixed top-0" />
      <main className="pt-10">{children}</main>
      <Footer className="h-10 w-full bg-slate-500 absolute bottom-0" />
    </>
  );
};

export default Layout;
