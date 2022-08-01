import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsPage/NewsList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import useNews from '../hooks/useNews';
import MainWrapper from '../components/MainWrapper';

const NewsPage = () => {
  const { newsArr, isLoading, refetch, isFetching } = useNews();
  const [load, setLoad] = useState(false);

  const handleLoad = () => {
    refetch();
    setLoad(true);
  };

  useEffect(() => {
    setLoad(false);
  }, [isFetching]);

  return (
    <>
      <Header refetch={handleLoad} />
      <MainWrapper>
        <NewsList newsArr={newsArr!} isLoading={isLoading || (isFetching && load)} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default NewsPage;
