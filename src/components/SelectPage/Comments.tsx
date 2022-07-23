import React, { useState } from 'react';
import { format } from 'date-fns';
import { IComments } from '../../models/IComments';
import styled from 'styled-components';
import { CommentHeader } from './CommentBox';

interface CommentProps {
  comment: IComments;
  className?: string;
}

const Comments: React.FC<CommentProps> = ({
  comment: { user, content, time, dead, comments, deleted, comments_count },
  className,
}) => {
  const date = new Date(time * 1000);
  const [commentVisible, setCommentVisible] = useState<boolean>();

  const handleVisible = () => {
    if (commentVisible === undefined) {
      setCommentVisible(true);
    }
    setCommentVisible(!commentVisible);
  };

  if (dead || deleted) {
    return null;
  }

  return (
    <CommentBox className={className}>
      <Comment>
        <CommentHeader>
          <CommentTitle>
            {comments_count !== 0 ? (
              <OpenComment
                onClick={() => {
                  handleVisible();
                }}
                className={commentVisible !== undefined ? (commentVisible ? 'rotate-right' : 'rotate-left') : ''}
              >
                ▼
              </OpenComment>
            ) : null}
            {user}
          </CommentTitle>
          <CommentTitle>{format(date, 'dd.MM.yy HH:mm')}</CommentTitle>
        </CommentHeader>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </Comment>
      {comments_count !== 0
        ? comments &&
          comments.map((comment: IComments) => (
            <Comments
              className={commentVisible !== undefined ? (commentVisible ? 'show' : 'hide') : 'hidden'}
              key={comment.id}
              comment={comment}
            />
          ))
        : null}
    </CommentBox>
  );
};

const Comment = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  color: ${(props) => props.theme.commentText};
  font-size: 0.9rem;
  margin-bottom: 10px;

  @media screen and (min-width: 576px) {
    padding: 15px 30px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px 15px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const CommentTitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.commentTitle};
`;

const OpenComment = styled.button`
  font-size: 1.2rem;
  color: ${(props) => props.theme.link};
  background-color: transparent;
  border: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.linkHover};
  }

  &.rotate-right {
    transform: rotate(-180deg);
    animation: rightRotate 0.3s linear;
  }

  &.rotate-left {
    transform: rotate(0);
    animation: leftRotate 0.3s linear;
  }

  &.left {
    transform: rotate(0);
  }

  &.right {
    transform: rotate(-180deg);
  }

  @keyframes rightRotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-180deg);
    }
  }

  @keyframes leftRotate {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const CommentBox = styled.div`
  @media screen and (min-width: 576px) {
    & & {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 576px) {
    & & {
      margin-left: 10px;
    }
  }

  pre {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  code {
    display: block;
    font-size: 0.85rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  a {
    margin-bottom: 10px;
    color: ${(props) => props.theme.link};
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.linkHover};
      text-decoration: underline;
    }
  }

  &.show {
    animation: showComment 0.4s linear;
  }

  &.hide {
    animation: hideComment 0.4s linear;
    height: 0;
    visibility: hidden;
    overflow: hidden;
  }

  &.hidden {
    display: none;
  }

  @keyframes showComment {
    0% {
      opacity: 0;
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hideComment {
    0% {
      transform: translateY(0);
      opacity: 1;
      height: 100%;
      visibility: visible;
    }
    100% {
      opacity: 0;
      transform: translateY(-10%);
    }
  }
`;

export default Comments;
