import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import styled from 'styled-components';
import Title from '../components/Title';
import { WrapperNews } from '../components/SelectPage/SelectNews';

const ErrorPage = () => {
  return (
    <Section>
      <ErrorBox>
        <Title>Page Not Found</Title>
        <Link className="link" to="/">
          back to the home page
        </Link>
      </ErrorBox>
    </Section>
  );
};

const ErrorBox = styled(WrapperNews)`
  .link {
    font-size: 1.6rem;
  }
`;

export default ErrorPage;
