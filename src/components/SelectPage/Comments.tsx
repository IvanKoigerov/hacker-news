import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { IComments } from '../../../../models/IComments';
import styled from 'styled-components';
import { CommentHeader } from '../CommentBox';

interface CommentProps {
  comment: IComments;
}

const Comments: React.FC<CommentProps> = ({
  comment: { user, content, time, dead, comments, deleted, comments_count },
}) => {
  const date = new Date(time * 1000);
  const [commentVisible, setCommentVisible] = useState(false);

  if (dead || deleted) {
    return null;
  }

  return (
    <CommentBox>
      <Comment>
        <CommentHeader>
          <CommentTitle>
            {comments_count !== 0 ? (
              <CSSTransition
                in={commentVisible}
                timeout={300}
                classNames={{
                  enterActive: 'rotate-right',
                  exitActive: 'rotate-left',
                  enterDone: 'right',
                  exitDone: 'left',
                }}
              >
                <OpenComment
                  onClick={() => {
                    setCommentVisible(!commentVisible);
                  }}
                >
                  ▼
                </OpenComment>
              </CSSTransition>
            ) : null}
            {user}
          </CommentTitle>
          <CommentTitle>
            {('0' + date.getDate()).substr(-2) +
              '.' +
              ('0' + (date.getMonth() + 1)).substr(-2) +
              '.' +
              ('0' + date.getFullYear()).substr(-2) +
              ' ' +
              ('0' + date.getHours()).substr(-2) +
              ':' +
              ('0' + date.getMinutes()).substr(-2)}
          </CommentTitle>
        </CommentHeader>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </Comment>
      {comments_count !== 0
        ? comments &&
          comments.map((comment: IComments) => (
            <CSSTransition
              in={commentVisible}
              key={comment.id}
              timeout={390}
              classNames={{
                enterActive: 'show',
                exitActive: 'hide',
              }}
              mountOnEnter
              unmountOnExit
            >
              <Comments key={comment.id} comment={comment} />
            </CSSTransition>
          ))
        : null}
    </CommentBox>
  );
};

const Comment = styled.div`
  background-color: #1c1b22;
  border-radius: 10px;
  color: #b3b3b6;
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
  color: #b2b5fe77;
`;

const OpenComment = styled.button`
  font-size: 1.2rem;
  color: #b2b5fe77;
  background-color: transparent;
  border: none;
  transition: all 0.2s;

  &:hover {
    color: #8b8dfa;
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

  &.show {
    animation: showComment 0.4s linear;
  }

  &.hide {
    animation: hideComment 0.4s linear;
  }

  @keyframes showComment {
    0% {
      opacity: 0;
      transform: translateY(-15%);
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
    }
    100% {
      opacity: 0;
      transform: translateY(-15%);
    }
  }
`;

export default Comments;
