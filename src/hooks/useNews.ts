import { useState, useEffect } from 'react';
import { getNewsArr } from '../Api/Api';
const useNews = () => {
   const [newsArr, setNews] = useState<any>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      setIsLoading(true);
      getNewsArr().then((newsArr) => {
         setNews(newsArr);
         setIsLoading(false);
      })
         .catch(() => {
            setIsLoading(false);
         });
   }, []);
   return { isLoading, newsArr };
};

export default useNews;