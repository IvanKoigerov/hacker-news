import React from 'react';
import { CommentsData } from '../../models/CommentsData';
import Section from '../Section';
import TextNews from '../TextNews';
import FooterNews from '../FooterNews';
import styled from 'styled-components';
import Title from '../Title';
import { format } from 'date-fns';
import StyledLink from '../StyledLink';

interface SelectNewsProps {
  news: CommentsData;
}

const SelectNews: React.FC<SelectNewsProps> = ({ news: { user, title, time, points, url, content } }) => {
  const date = new Date(time * 1000);
  return (
    <Section>
      <WrapperNews>
        <Title defaultValue="2.2rem">{title}</Title>
        <TextNews>User: {user}</TextNews>
        <TextNews dangerouslySetInnerHTML={{ __html: content }}></TextNews>
        <TextNews>
          Link:{' '}
          <StyledLink as="a" href={url}>
            {url}
          </StyledLink>
        </TextNews>
        <FooterNews>
          <TextNews>{points} points</TextNews>
          <TextNews>{format(date, 'dd.MM.yy HH:mm')}</TextNews>
        </FooterNews>
      </WrapperNews>
    </Section>
  );
};

export const WrapperNews = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  padding: 15px 20px;
`;

export default SelectNews;
