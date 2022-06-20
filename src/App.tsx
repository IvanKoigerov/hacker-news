import { Route, Routes } from 'react-router-dom';
import './style/App.css';

import Layout from './components/Layout/Layout';
import NewsPage from './page/NewsPage';
import SelectPage from './page/SelectPage';
import ErrorPage from './page/ErrorPage'




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<NewsPage />} />
          <Route path='item/:id' element={<SelectPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>

    </div >
  );
}

export default App;
