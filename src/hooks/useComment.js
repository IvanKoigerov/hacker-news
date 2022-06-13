import { useState, useEffect } from 'react';
import { getComments } from '../Api';
const useComment = (kids) => {
   const [commentArr, setComment] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      if (kids != null) {
         setIsLoading(true);
         getComments(kids).then((commentArr) => {
            setComment(commentArr);
            setIsLoading(false);
         })
            .catch(() => {
               setIsLoading(false);
            });
      }
   }, [kids]);
   return { isLoading, commentArr };
};

export default useComment;