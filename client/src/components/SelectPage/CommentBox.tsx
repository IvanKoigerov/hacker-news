import React from 'react';

import { CommentsData } from '../../models/CommentsData';
import Section from '../Section';
import Title from '../Title';
import styled from 'styled-components';
import Comments from './Comments';

interface CommentProps {
  comment: CommentsData;
}

const CommentBox: React.FC<CommentProps> = ({ comment: { comments, comments_count } }) => {
  return (
    <Section>
      <CommentHeader padding="20px">
        <Title> Comments {comments_count}</Title>
      </CommentHeader>
      {comments && comments.map((comment: CommentsData) => <Comments key={comment.id} comment={comment} />)}
    </Section>
  );
};

export const CommentHeader = styled.div<{ padding?: string }>`
  display: flex;
  justify-content: space-between;
  padding-right: ${({ padding }) => padding || '0'};
  padding-left: ${({ padding }) => padding || '0'};
`;

export default CommentBox;
