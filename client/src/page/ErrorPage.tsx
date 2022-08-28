import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainWrapper from '../components/MainWrapper';
import Error from '../components/ErrorPage/Error';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Error />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default ErrorPage;
