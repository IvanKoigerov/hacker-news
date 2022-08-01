import React from 'react';
import styled from 'styled-components';
import { WrapperNews } from '../SelectPage/SelectNews';
import Section from '../Section';
import Title from '../Title';
import { Link } from 'react-router-dom';
import StyledLink from '../StyledLink';

const Error = () => (
  <Section>
    <ErrorBox>
      <Title>Page Not Found</Title>
      <StyledLink as={Link} to="/">
        back to the home page
      </StyledLink>
    </ErrorBox>
  </Section>
);

const ErrorBox = styled(WrapperNews)`
  ${StyledLink} {
    font-size: 1.6rem;
  }
`;
export default Error;
