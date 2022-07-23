import github from './github.svg';
import vk from './vk.svg';
import tg from './tg.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterItem>
          <FooterLink href="https://vk.com/vkoygerov">
            <img src={vk} alt="vkontakte" />
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink href="https://t.me/an1meboy">
            <img src={tg} alt="telegram" />
          </FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink href="https://github.com/IvanKoigerov">
            <img src={github} alt="github" />
          </FooterLink>
        </FooterItem>
      </FooterList>

      <a href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md" className="link">
        API
      </a>

      <FooterCorp>Copyright © 2022 corp.</FooterCorp>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 25px;
  padding: 0;
`;

const FooterItem = styled.li`
  :not(:last-child) {
    margin-right: 40px;
  }
`;

const FooterCorp = styled.p`
  color: ${(props) => props.theme.corp};
`;

const FooterLink = styled.a`
  img {
    width: 55px;
    opacity: 0.5;
    transition: all 0.2s;
  }

  img:hover {
    opacity: 1;
  }
`;

export default Footer;
