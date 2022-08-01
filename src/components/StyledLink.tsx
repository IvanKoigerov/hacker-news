import styled from 'styled-components';

const StyledLink = styled.a`
  margin-bottom: 10px;
  color: ${(props) => props.theme.link};
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.linkHover};
    text-decoration: underline;
  }
`;

export default StyledLink;
