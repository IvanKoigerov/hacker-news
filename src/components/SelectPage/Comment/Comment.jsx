import React from 'react'
import classes from './Comment.module.css'

const Comment = (props) => {
   return (
      <div className={classes.comment}>
         <div className={classes.commentHeader}>
            <p className={classes.commentAuthor}>{props.author}</p>
            <p className={classes.commentDate}>{props.date}</p>
         </div>
         <p className={classes.commentText}>
            {props.text}
         </p>
      </div>
   )
}

export default Comment;
