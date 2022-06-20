import React from 'react'
import { IComments } from '../../../models/IComments';

interface SelectNewsProps {
   news: IComments
}

const SelectNews: React.FC<SelectNewsProps> = ({ news: { user, title, time, points, url, content } }) => {
   const date = new Date(time * 1000);
   return (
      <section className='section'>
         <div className='select-news'>
            <h1 className='select-title title'>{title}</h1>
            <p className='text-news'>User: {user}</p>
            <p className='text-news' dangerouslySetInnerHTML={{ __html: content }}></p>
            <p className='text-news'>Link: <a className='text-news link' href={url}>{url}</a></p>
            <div className='news-footer'>
               <p className='text-news'>{points} points</p>
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
