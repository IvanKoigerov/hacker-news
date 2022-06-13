import { useState, useEffect } from 'react';
import { getNewsArr } from '../Api';
const useNews = () => {
   const [newsArr, setNews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

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