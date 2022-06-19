import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import classes from './Comment.module.css'
import useComment from '../../../../hooks/useComment';

import { IComments } from '../../../../models/IComments';

const Comment: React.FC<IComments> = ({ comment: { id, by, text, time, dead, kids, deleted } }) => {
   const date = new Date(time * 1000);
   const { commentArr } = useComment(kids);
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
                  {kids != null ?
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
                  {by}
               </p>
               <p className={classes.commentDate}>
                  {("0" + date.getDate()).substr(-2) +
                     "." + ("0" + (date.getMonth() + 1)).substr(-2) +
                     "." + ("0" + date.getFullYear()).substr(-2) +
                     " " + ("0" + date.getHours()).substr(-2) +
                     ":" + ("0" + date.getMinutes()).substr(-2)}</p>
            </div>
            <p className={classes.commentText} dangerouslySetInnerHTML={{ __html: text }}>
            </p>
         </div >
         {kids != null ?
            (<div className='childCom'>
               {commentArr && commentArr.map((comment: any) => (
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
