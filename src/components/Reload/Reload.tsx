import React from 'react';
import styled from 'styled-components';
import reload from './reload.svg';

interface ReloadProps {
  refetch?: () => void;
}

const Reload = (props: ReloadProps) => {
  return (
    <ButtonReload onClick={props.refetch}>
      <img src={reload} alt="reload button" />
    </ButtonReload>
  );
};

const ButtonReload = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  transition: all 0.2s;
  opacity: 0.7;
  cursor: pointer;

  &:active {
    transform: rotate(-360deg);
  }

  &:hover {
    opacity: 1;
  }

  img {
    width: 30px;
  }
`;

export default Reload;
