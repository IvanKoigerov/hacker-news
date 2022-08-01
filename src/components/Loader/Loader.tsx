import styled from 'styled-components';

const Loader = () => {
  return (
    <BoxLoader>
      <Load />
    </BoxLoader>
  );
};

const BoxLoader = styled.div`
  background-color: ${(props) => props.theme.main};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Load = styled.div`
  width: 125px;
  height: 125px;
  border: 18px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.common};
  animation: 0.44s load infinite linear 0s;

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
