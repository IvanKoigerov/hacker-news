import styled from 'styled-components';

const TextNews = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.color || props.theme.textNews};
  margin-top: 0;
`;

export default TextNews;
