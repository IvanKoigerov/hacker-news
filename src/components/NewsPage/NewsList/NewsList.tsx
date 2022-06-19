import React from 'react'
import News from '../News/News';
import Loader from '../../Loader/Loader';
import useNews from '../../../hooks/useNews';
//import { newsApi } from '../../../services/NewsService';


const NewsList: React.FC = () => {
   const { isLoading, newsArr } = useNews();
   //const { data: newsArr } = newsApi.useFetchAllNewsQuery(10)

   return (
      <section className='section-news'>
         <React.Fragment>
            {isLoading ? (
               <Loader />
            ) : (
               <React.Fragment>
                  {newsArr && newsArr.map((news: any) => (
                     <News key={news.id} news={news} />
                  ))
                  }
               </React.Fragment>
            )}

         </React.Fragment>
      </section>
   )
}

export default NewsList;
