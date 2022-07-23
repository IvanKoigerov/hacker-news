import React from 'react';
import { useParams } from 'react-router-dom';

import SelectNews from '../components/SelectPage/SelectNews';
import CommentBox from '../components/SelectPage/CommentBox';
import ErrorPage from './ErrorPage';
import { newsApi } from '../services/NewsService';
import Loader from '../components/Loader/Loader';
import { IComments } from '../models/IComments';

const isBadComment = (comment: IComments | undefined) => {
  return comment == null || (comment.type !== 'link' && comment.type !== 'poll') || comment.dead || comment.deleted;
};

const SelectPage = () => {
  const { id } = useParams();
  const {
    data: comment,
    isLoading,
    refetch,
  } = newsApi.useFetchNewsQuery(id!, {
    pollingInterval: 60000,
  });

  //31592934 удалю, когда почти все готово будет

  if (isLoading) return <Loader />;
  if (isBadComment(comment)) return <ErrorPage />;
  return (
    <>
      <SelectNews news={comment!} />
      <CommentBox comment={comment!} refetch={refetch} />
    </>
  );
};

export default SelectPage;
