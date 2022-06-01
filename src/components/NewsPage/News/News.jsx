import React, { useEffect, useState } from 'react'
import { getNews } from '../../../Api';

const News = (props) => {
   const [news, setNews] = useState({})
   useEffect(() => {
      getNews(props.id).then(data => data && setNews(data));
   })

   const date = new Date(news.time * 1000);
   return (
      <div className='news'>
         <h1 className='news-title title'>{news.title}</h1>
         <p className='text-news news-author'>{news.by}</p>
         <div className='news-footer'>
            <p className='text-news news-point'>{news.score} points</p>
            <p className='text-news news-date'>
               {("0" + date.getDate()).substr(-2) +
                  "." + ("0" + (date.getMonth() + 1)).substr(-2) +
                  "." + ("0" + date.getFullYear()).substr(-2) +
                  " " + ("0" + date.getHours()).substr(-2) +
                  ":" + ("0" + date.getMinutes()).substr(-2)}
            </p>
         </div>
      </div>
   )
}

export default News;
