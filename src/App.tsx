import { Route, Routes } from 'react-router-dom';
//import './style/App.css';
import NewsPage from './page/NewsPage';
import SelectPage from './page/SelectPage';
import ErrorPage from './page/ErrorPage';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from './GlobalStyle/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppWrapper>
        <Routes>
          <Route path="/">
            <Route index element={<NewsPage />} />
            <Route path="item/:id" element={<SelectPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
