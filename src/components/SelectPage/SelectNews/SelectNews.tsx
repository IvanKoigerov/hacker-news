import React from 'react'

import { INews } from '../../../models/INews';

const SelectNews: React.FC<INews> = ({ news: { by, title, time, score, url } }) => {
   const date = new Date(time * 1000);
   return (
      <section className='section'>
         <div className='select-news'>
            <h1 className='select-title title'>{title}</h1>
            <p className='text-news'>{by}</p>
            <a className='text-news link' href={url}>{url}</a>
            <div className='news-footer'>
               <p className='text-news'>{score} points</p>
               <p className='text-news'>
                  {("0" + date.getDate()).substr(-2) +
                     "." + ("0" + (date.getMonth() + 1)).substr(-2) +
                     "." + ("0" + date.getFullYear()).substr(-2) +
                     " " + ("0" + date.getHours()).substr(-2) +
                     ":" + ("0" + date.getMinutes()).substr(-2)}
               </p>
            </div>
         </div>
      </section>
   )
}

export default SelectNews;
