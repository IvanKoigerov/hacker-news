import React from 'react'
import useComment from '../../../hooks/useComment';
import Comment from './Comment/Comment';
import Loader from '../../Loader/Loader'
import reload from './reload.svg'

const CommentBox = ({ news: { kids, descendants } }) => {
   const { isLoading, commentArr } = useComment(kids);

   return (
      <section className='section'>
         <React.Fragment>
            {isLoading ? (
               <Loader />
            ) : (
               <React.Fragment>
                  <div className='comment-box_title'>
                     <h1 className='comment-title title'> Comments {descendants}</h1>
                     <button className='reload'><img src={reload} alt="" /></button>
                  </div>
                  {commentArr.map((comment) => (
                     <Comment key={comment.id} comment={comment} />
                  ))
                  }
               </React.Fragment>
            )}
         </React.Fragment>
      </section >
   )
}

export default CommentBox;
