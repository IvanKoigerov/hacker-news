import React from 'react';
import SelectNews from './SelectNews';
import CommentBox from './CommentBox';
import Loader from '../Loader/Loader';
import Error from '../ErrorPage/Error';
import { CommentsData } from '../../models/CommentsData';

interface SelectProps {
  isFetching: boolean;
  comment: CommentsData;
}

const isBadComment = (comment: CommentsData | undefined) => {
  return comment == null || comment.dead || comment.deleted;
};

const Select = (props: SelectProps) => {
  if (props.isFetching) return <Loader />;
  if (isBadComment(props.comment)) return <Error />;
  return (
    <>
      <SelectNews news={props.comment} />
      <CommentBox comment={props.comment} />
    </>
  );
};

export default Select;
