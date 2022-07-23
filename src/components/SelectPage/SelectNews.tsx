import React from 'react';
import { IComments } from '../../../models/IComments';
import Section from '../../Section';
import TextNews from '../../TextNews';
import FooterNews from '../../FooterNews';
import styled from 'styled-components';
import Title from '../../Title';

interface SelectNewsProps {
  news: IComments;
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
          <TextNews as="a" className="link" href={url}>
            {url}
          </TextNews>
        </TextNews>
        <FooterNews>
          <TextNews>{points} points</TextNews>
          <TextNews>
            {('0' + date.getDate()).substr(-2) +
              '.' +
              ('0' + (date.getMonth() + 1)).substr(-2) +
              '.' +
              ('0' + date.getFullYear()).substr(-2) +
              ' ' +
              ('0' + date.getHours()).substr(-2) +
              ':' +
              ('0' + date.getMinutes()).substr(-2)}
          </TextNews>
        </FooterNews>
      </WrapperNews>
    </Section>
  );
};

const WrapperNews = styled.div`
  background-color: #1c1b22;
  border-radius: 10px;
  padding: 15px 20px;
`;

export default SelectNews;
