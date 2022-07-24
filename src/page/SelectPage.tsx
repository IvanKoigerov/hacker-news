import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newsApi } from '../services/NewsService';
import Header from '../components/Header/Header';
import MainWrapper from '../components/MainWrapper';
import Footer from '../components/Footer/Footer';
import Select from '../components/SelectPage/Select';

const SelectPage = () => {
  const { id } = useParams();
  const {
    data: comment,
    isLoading,
    refetch,
    isFetching,
  } = newsApi.useFetchNewsQuery(id!, {
    pollingInterval: 60000,
  });

  const [load, setLoad] = useState(false);

  const handleLoad = () => {
    refetch();
    setLoad(true);
  };

  useEffect(() => {
    setLoad(false);
  }, [isFetching]);

  //31592934 удалю, когда почти все готово будет

  return (
    <>
      <Header refetch={handleLoad} />
      <MainWrapper>
        <Select isFetching={isLoading || (isFetching && load)} comment={comment!} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default SelectPage;
