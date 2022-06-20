import React from 'react'
import News from '../News/News';
import Loader from '../../Loader/Loader';
import useNews from '../../../hooks/useNews';


const NewsList: React.FC = () => {
   const { newsArrr, isLoading } = useNews();

   return (
      <section className='section-news'>

         {isLoading && <Loader />}

         {newsArrr && newsArrr.map((news: any) => (
            <News key={news.id} news={news} />
         ))}
      </section>

   )
}

export default NewsList;

