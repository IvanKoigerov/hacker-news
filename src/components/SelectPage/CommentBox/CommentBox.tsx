import React from 'react'

import Comment from './Comment/Comment';
import reload from './reload.svg'

import { IComments } from '../../../models/IComments';

interface CommentProps {
   comment: IComments
}

const CommentBox: React.FC<CommentProps> = ({ comment: { comments, comments_count } }) => {
   return (
      <section className='section'>
         <div className='comment-box_title'>
            <h1 className='comment-title title'> Comments {comments_count}</h1>
            <button className='reload'><img src={reload} alt="" /></button>
         </div>
         {comments && comments.map((comment: any) => (
            <Comment key={comment.id} comment={comment} />
         ))
         }
      </section >
   )
}

export default CommentBox;
