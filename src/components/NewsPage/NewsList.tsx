import React from 'react';
import News from '../News';
import Loader from '../../Loader/Loader';
import useNews from '../../../hooks/useNews';
import { INews } from '../../../models/INews';
import styled from 'styled-components';

const NewsList = () => {
  const { newsArr, isLoading } = useNews();

  if (isLoading) return <Loader />;
  return <SectionNews>{newsArr && newsArr.map((news: INews) => <News key={news.id} news={news} />)}</SectionNews>;
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
