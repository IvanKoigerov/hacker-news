import React from 'react'
import News from '../News/News';
import Loader from '../../Loader/Loader';
import useNews from '../../../hooks/useNews';

const NewsList = () => {
   const { isLoading, newsArr } = useNews({});

   return (
      <section className='section-news'>
         <React.Fragment>
            {isLoading ? (
               <Loader />
            ) : (
               <React.Fragment>
                  {newsArr.map((news) => (
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
