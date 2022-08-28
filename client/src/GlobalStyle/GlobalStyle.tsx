import { createGlobalStyle } from 'styled-components';

export const mainTheme = {
  main: '#2b2a33',
  primary: '#1c1b22',
  primaryOp: '#1c1b22bf',
  common: '#7275ff',
  corp: '#777',

  linkHover: '#8b8dfa',
  link: '#b2b5fe77',

  scroll: '#6b6cba',
  scrollHover: '#8b8dfa',

  commentText: '#b3b3b6',
  commentTitle: '#b2b5fe77',

  textNews: '#999bd9',
};

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  @media screen and (min-width: 576px) {
    :root {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 576px) {
    :root {
      font-size: 13px;
    }
  }

  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: ${mainTheme.main};
  }

  a {
    background-color: transparent;
    text-decoration: none;
    font-family: inherit;
  }

  img {
    border-style: none;
  }

  button,
  input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
  }

  p {
    margin-top: 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${mainTheme.scroll};
    background-clip: content-box;
    border: 3px solid transparent;

    &:hover {
      background-color: ${mainTheme.scrollHover};
    }
  }

  ::-webkit-scrollbar-track {
    background: ${mainTheme.primary};
  }

  ::-webkit-scrollbar {
    width: 14px;
    position: absolute;
    transition: all 0.2s;
  }`;

export default GlobalStyle;
