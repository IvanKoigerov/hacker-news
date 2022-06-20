import React from 'react'
import { Link } from 'react-router-dom';
import { INews } from '../../../models/INews';


const News: React.FC<INews> = ({ news: { id, user, title, time, points, dead, deleted } }) => {
   const date = new Date(time * 1000);

   if (dead || deleted) {
      return <></>
   }


   return (
      <Link to={"item/" + id} className='news'>
         <h1 className='news-title title'>{title}</h1>
         <p className='text-news news-author'>{user}</p>
         <div className='news-footer'>
            <p className='text-news news-point'>{points} points</p>
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