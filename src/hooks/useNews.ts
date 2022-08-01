import { useEffect, useState } from 'react';
import { newsApi } from '../services/NewsService';
import { NewsData } from '../models/NewsData';

const useNews = () => {
  const [newsArr, setNews] = useState<NewsData[]>();
  const {
    data: newsArr1,
    isLoading: load1,
    refetch: refetch1,
    isFetching: fetch1,
  } = newsApi.useFetchAllNewsQuery(1, {
    pollingInterval: 60000,
  });
  const {
    data: newsArr2,
    isLoading: load2,
    refetch: refetch2,
    isFetching: fetch2,
  } = newsApi.useFetchAllNewsQuery(2, {
    pollingInterval: 60000,
  });
  const {
    data: newsArr3,
    isLoading: load3,
    refetch: refetch3,
    isFetching: fetch3,
  } = newsApi.useFetchAllNewsQuery(3, {
    pollingInterval: 60000,
  });
  const {
    data: newsArr4,
    isLoading: load4,
    refetch: refetch4,
    isFetching: fetch4,
  } = newsApi.useFetchAllNewsQuery(4, {
    pollingInterval: 60000,
  });

  useEffect(() => {
    if (newsArr1 && newsArr2 && newsArr3 && newsArr4) {
      setNews(newsArr1.concat(newsArr2, newsArr3, newsArr4.slice(0, 10)));
    }
  }, [newsArr1, newsArr2, newsArr3, newsArr4]);

  const refetch = () => {
    refetch1();
    refetch2();
    refetch3();
    refetch4();
  };

  return {
    isLoading: load1 && load2 && load3 && load4,
    isFetching: fetch1 && fetch2 && fetch3 && fetch4,
    newsArr,
    refetch,
  };
};

export default useNews;
