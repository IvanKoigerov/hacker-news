import React from 'react';
import { Link } from 'react-router-dom';

import logo from './icon.svg';
import styled from 'styled-components';
import Reload from '../Reload/Reload';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo>
          <img src={logo} alt="logo" />
          <h1>FOX NEWS</h1>
        </HeaderLogo>
      </Link>
      <Reload />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.primaryOp};
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  @media screen and (min-width: 992px) {
    padding: 5px 50px;
    justify-content: space-around;
  }

  @media screen and (max-width: 992px) and (min-width: 768px) {
    padding: 5px 40px;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 15px;
    justify-content: space-between;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    height: 65px;
    margin-right: 20px;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    color: ${(props) => props.theme.common};
  }
`;

export default Header;
