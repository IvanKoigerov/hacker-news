import React from 'react';
import News from './News';
import Loader from '../Loader/Loader';
import { NewsData } from '../../models/NewsData';
import styled from 'styled-components';

interface NewsListProps {
  isLoading?: boolean;
  newsArr: NewsData[];
}

const NewsList = (props: NewsListProps) => {
  if (props.isLoading) return <Loader />;
  return (
    <SectionNews>
      {props.newsArr && props.newsArr.map((news: NewsData) => <News key={news.id} news={news} />)}
    </SectionNews>
  );
};

const SectionNews = styled.section`
  display: grid;
  gap: 30px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    width: 1100px;
  }

  @media screen and (max-width: 576px) {
    gap: 10px;
  }
`;

export default NewsList;
