import React from 'react'
import { Link } from 'react-router-dom';

const News = ({ news: { id, by, title, time, score } }) => {
   const date = new Date(time * 1000);
   return (
      <Link to={"item/" + id} className='news'>
         <h1 className='news-title title'>{title}</h1>
         <p className='text-news news-author'>{by}</p>
         <div className='news-footer'>
            <p className='text-news news-point'>{score} points</p>
            <p className='text-news news-date'>
               {("0" + date.getDate()).substr(-2) +
                  "." + ("0" + (date.getMonth() + 1)).substr(-2) +
                  "." + ("0" + date.getFullYear()).substr(-2) +
                  " " + ("0" + date.getHours()).substr(-2) +
                  ":" + ("0" + date.getMinutes()).substr(-2)}
            </p>
         </div>
      </Link>
   )
}

export default News;