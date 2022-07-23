import React from 'react';

import { IComments } from '../../../models/IComments';
import Reload from '../../Reload/Reload';
import Section from '../../Section';
import Title from '../../Title';
import styled from 'styled-components';
import Comments from './Comment/Comments';

interface CommentProps {
  comment: IComments;
  refetch: () => void;
}

const CommentBox: React.FC<CommentProps> = ({ comment: { comments, comments_count } }, { refetch }) => {
  return (
    <Section>
      <CommentHeader padding="20px">
        <Title> Comments {comments_count}</Title>
        <Reload />
      </CommentHeader>
      {comments && comments.map((comment: IComments) => <Comments key={comment.id} comment={comment} />)}
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
