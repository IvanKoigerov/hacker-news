import styled from 'styled-components';

const Section = styled.section`
  @media screen and (min-width: 1200px) {
    width: 1200px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export default Section;
