import styled from 'styled-components';

const MainWrapper = styled.main`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 75px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    padding: 50px;
  }

  @media screen and (max-width: 992px) {
    padding: 30px 10px;
  }
`;

export default MainWrapper;
