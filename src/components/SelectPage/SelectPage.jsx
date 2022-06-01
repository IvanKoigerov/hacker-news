import React from 'react'
import SelectNews from './SelectNews/SelectNews';
import Comment from './Comment/Comment';
//import classes from './News.module.css'

const SelectPage = () => {
   return (
      <main className='page'>
         <SelectNews />
         <Comment />
      </main>
   )
}

export default SelectPage;
