import React from 'react';
import './App.css';
// import SelectNews from './components/SelectPage/SelectNews/SelectNews';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
// import Comment from './components/SelectPage/Comment/Comment';
// import News from './components/NewsPage/News/News';
// import NewsPage from './components/NewsPage/NewsPage';
import NewsList from './components/NewsPage/NewsList/NewsList';
// import SelectPage from './components/SelectPage/SelectPage';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='page'>
        <Loader />
        <NewsList />
      </main>

      <Footer />
    </div >
  );
}

export default App;
