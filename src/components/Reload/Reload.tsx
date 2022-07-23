import React from 'react';
import styled from 'styled-components';
import reload from './reload.svg';

const Reload = () => {
  return (
    <ButtonReload>
      <img src={reload} alt="reload button" />
    </ButtonReload>
  );
};

const ButtonReload = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  transition: all 0.3s;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  img {
    width: 30px;
  }
`;

export default Reload;
