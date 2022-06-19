import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SelectNews from '../components/SelectPage/SelectNews/SelectNews';
import CommentBox from '../components/SelectPage/CommentBox/CommentBox';
import ErrorPage from './ErrorPage';

import { getNews } from '../Api/Api';



const SelectPage = () => {
   const { id } = useParams();

   const [news, setNews] = useState<any>([]);
   useEffect(() => {
      getNews(id).then(data => setNews(data));
   }, [])

   //31592934

   if (news == null || news.type !== 'story' || news.dead || news.deleted) {
      return (
         <ErrorPage />
      )
   }

   return (
      <main className='page'>
         <SelectNews news={news} />
         <CommentBox news={news} />
      </main>
   )
}

export default SelectPage;
