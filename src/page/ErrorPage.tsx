import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import styled from 'styled-components';
import Title from '../components/Title';
import { WrapperNews } from '../components/SelectPage/SelectNews';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainWrapper from '../components/MainWrapper';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Section>
          <ErrorBox>
            <Title>Page Not Found</Title>
            <Link className="link" to="/">
              back to the home page
            </Link>
          </ErrorBox>
        </Section>
      </MainWrapper>
      <Footer />
    </>
  );
};

const ErrorBox = styled(WrapperNews)`
  .link {
    font-size: 1.6rem;
  }
`;

export default ErrorPage;
