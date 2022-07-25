import React from 'react';
import styled from 'styled-components';
import { WrapperNews } from '../SelectPage/SelectNews';
import Section from '../Section';
import Title from '../Title';
import { Link } from 'react-router-dom';

const Error = () => (
  <Section>
    <ErrorBox>
      <Title>Page Not Found</Title>
      <Link className="link" to="/">
        back to the home page
      </Link>
    </ErrorBox>
  </Section>
);

const ErrorBox = styled(WrapperNews)`
  .link {
    font-size: 1.6rem;
  }
`;
export default Error;
