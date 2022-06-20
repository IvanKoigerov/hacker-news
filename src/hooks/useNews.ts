import { useState, useEffect } from 'react';
import { newsApi } from '../services/NewsService';

const useNews = () => {
   const [newsArrr, setNews] = useState<any>([]);
   // const [isLoading, setIsLoading] = useState<boolean>(false);
   const { data: newsArr1, isLoading: load1 } = newsApi.useFetchAllNewsQuery(1, {
      pollingInterval: 60000
   });
   const { data: newsArr2, isLoading: load2 } = newsApi.useFetchAllNewsQuery(2, {
      pollingInterval: 60000
   });
   const { data: newsArr3, isLoading: load3 } = newsApi.useFetchAllNewsQuery(3, {
      pollingInterval: 60000
   });
   const { data: newsArr4, isLoading: load4 } = newsApi.useFetchAllNewsQuery(4, {
      pollingInterval: 60000
   });



   useEffect(() => {
      if (newsArr3 && newsArr2 && newsArr1 && newsArr4) {
         setNews(newsArr1.concat(newsArr2, newsArr3, newsArr4.slice(0, 10)));
      }
   }, [newsArr1, newsArr2, newsArr3, newsArr4]);
   return { isLoading: load1 && load2 && load3 && load4, newsArrr };
};

export default useNews;