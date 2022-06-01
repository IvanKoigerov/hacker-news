import React, { useState, useEffect } from 'react'
import News from '../News/News';
import { getNewsId } from '../../../Api';

const NewsList = () => {

   const [newsId, setNewsId] = useState([])

   useEffect(() => {
      getNewsId().then(data => setNewsId(data));
   }, [])

   return (
      <section className='section-news'>
         {newsId.map((newsId) => <News id={newsId} key={newsId} />)}
      </section>

   )
}

export default NewsList;
