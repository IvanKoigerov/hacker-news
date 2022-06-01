import React from 'react'
//import classes from './SelectNews.module.css'

const SelectNews = (props) => {
   return (
      <section className='section'>
         <div className='select-news'>
            <h1 className='select-title title'>{props.title}</h1>
            <p className='text-news'>{props.author}</p>
            <a className='text-news link' href={props.link}>{props.link}</a>
            <div className='news-footer'>
               <p className='text-news'>{props.point}</p>
               <p className='text-news'>{props.date}</p>
            </div>
         </div>
      </section>
   )
}

export default SelectNews;
