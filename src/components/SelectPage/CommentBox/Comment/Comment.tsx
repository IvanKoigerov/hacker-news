import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import classes from './Comment.module.css'

import { IComments } from '../../../../models/IComments';

interface CommentProps {
   comment: IComments
}

const Comment: React.FC<CommentProps> = ({ comment: { id, user, content, time, dead, comments, deleted, comments_count } }) => {
   const date = new Date(time * 1000);
   const [commentVisible, setCommentVisible] = useState(false);

   if (dead || deleted) {
      return (
         <></>
      );
   }


   return (
      <div className='comment-box'>
         <div className={classes.comment} >
            <div className={classes.commentHeader}>
               <p className={classes.commentAuthor}>
                  {comments_count !== 0 ?
                     (<CSSTransition in={commentVisible} timeout={300}
                        classNames={{
                           enterActive: 'rotate-right',
                           exitActive: 'rotate-left',
                           enterDone: 'right',
                           exitDone: 'left'
                        }}
                     >
                        <button className={classes.openCom} onClick={() => { setCommentVisible(!commentVisible); }}>▼</button>
                     </CSSTransition>)
                     : (<></>)}
                  {user}
               </p>
               <p className={classes.commentDate}>
                  {("0" + date.getDate()).substr(-2) +
                     "." + ("0" + (date.getMonth() + 1)).substr(-2) +
                     "." + ("0" + date.getFullYear()).substr(-2) +
                     " " + ("0" + date.getHours()).substr(-2) +
                     ":" + ("0" + date.getMinutes()).substr(-2)}</p>
            </div>
            <p className={classes.commentText} dangerouslySetInnerHTML={{ __html: content }}>
            </p>
         </div >
         {comments_count !== 0 ?
            (<div className='childCom'>
               {comments && comments.map((comment: any) => (
                  <CSSTransition
                     in={commentVisible}
                     key={comment.id}
                     timeout={390}
                     classNames={{
                        enterActive: 'childCom-show',
                        enterDone: 'childCom',
                        exitActive: 'childCom-hide'
                     }}
                     mountOnEnter
                     unmountOnExit>
                     < Comment comment={comment} />
                  </CSSTransition>

               ))}
            </div>)
            : (<></>)}

      </div >

   )
}

export default Comment;
