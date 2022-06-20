import React from 'react'
import { useParams } from 'react-router-dom';

import SelectNews from '../components/SelectPage/SelectNews/SelectNews';
import CommentBox from '../components/SelectPage/CommentBox/CommentBox';
import ErrorPage from './ErrorPage';
import { newsApi } from '../services/NewsService';
import Loader from '../components/Loader/Loader';





const SelectPage: React.FC = () => {
   const { id } = useParams();
   const { data: comment, isLoading } = newsApi.useFetchNewsQuery(id, {
      pollingInterval: 60000
   });
   //31592934


   return (


      <main className='page'>
         {isLoading ? (<Loader />)
            : comment == null || comment.type !== 'link' || comment.dead || comment.deleted ? (<ErrorPage />)
               : <><SelectNews news={comment} /><CommentBox comment={comment} /></>
         }

      </main>
   )
}

export default SelectPage;
