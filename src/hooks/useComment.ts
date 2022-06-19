import { useState, useEffect } from 'react';
import { getComments } from '../Api/Api';
const useComment = (kids: any[]) => {
   const [commentArr, setComment] = useState<any>([]);
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