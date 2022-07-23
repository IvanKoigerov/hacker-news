import React from 'react';
import { Link } from 'react-router-dom';
import { INews } from '../../models/INews';
import TextNews from '../TextNews';
import styled from 'styled-components';
import FooterNews from '../FooterNews';
import Title from '../Title';
import { format } from 'date-fns';

interface NewsProps {
  news: INews;
}

const News: React.FC<NewsProps> = ({ news: { id, user, title, time, points, dead, deleted } }) => {
  const date = new Date(time * 1000);

  if (dead || deleted) {
    return null;
  }

  return (
    <NewsBox as={Link} to={'item/' + id}>
      <Title>{title}</Title>
      <TextNews color="#fff">{user}</TextNews>
      <FooterNews>
        <TextNews>{points} points</TextNews>
        <TextNews>{format(date, 'dd.MM.yy HH:mm')}</TextNews>
      </FooterNews>
    </NewsBox>
  );
};

const NewsBox = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 3px 3px 5px 3px #00000010;

  &:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 5px 3px #0000002d;
  }

  h1 {
    font-size: 1.8rem;
  }
`;
export default News;
