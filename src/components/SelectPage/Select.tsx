import React from 'react';
import SelectNews from './SelectNews';
import CommentBox from './CommentBox';
import Loader from '../Loader/Loader';
import ErrorPage from '../../page/ErrorPage';
import { CommentsData } from '../../models/CommentsData';

interface SelectProps {
  isFetching: boolean;
  comment: CommentsData;
}

const isBadComment = (comment: CommentsData | undefined) => {
  return comment == null || (comment.type !== 'link' && comment.type !== 'poll') || comment.dead || comment.deleted;
};

const Select = (props: SelectProps) => {
  if (props.isFetching) return <Loader />;
  if (isBadComment(props.comment)) return <ErrorPage />;
  return (
    <>
      <SelectNews news={props.comment} />
      <CommentBox comment={props.comment} />
    </>
  );
};

export default Select;
