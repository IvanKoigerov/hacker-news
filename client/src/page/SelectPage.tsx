import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { newsLocalApi } from '../services/NewsService';
import Header from '../components/Header/Header';
import MainWrapper from '../components/MainWrapper';
import Footer from '../components/Footer/Footer';
import Select from '../components/SelectPage/Select';

const SelectPage = () => {
  const { id } = useParams();
  // const {
  //     data: comment,
  //     isLoading,
  //     refetch,
  //     isFetching,
  // } = newsApi.useFetchNewsQuery(id!, {
  //     pollingInterval: 60000,
  // });

  const { data: comment1, isLoading: loading } = newsLocalApi.useFetchNewsQuery(id!);

  const [load, setLoad] = useState(false);

  const handleLoad = () => {
    // refetch();
    setLoad(true);
  };

  // useEffect(() => {
  //     setLoad(false);
  // }, [isFetching]);

  return (
    <>
      <Header refetch={handleLoad} />
      <MainWrapper>
        {/*<Select isFetching={isLoading || (isFetching && load) || loading} comment={comment!}/>*/}
        <Select isFetching={loading} comment={comment1!} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default SelectPage;
