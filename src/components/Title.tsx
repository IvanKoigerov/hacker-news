import styled from 'styled-components';

const Title = styled.h1`
  color: #7275ff;
  margin-top: 0;
  margin-bottom: 10px;
  word-wrap: break-word;
  font-size: ${(props) => props.defaultValue || '2rem'}; ;
`;

export default Title;
