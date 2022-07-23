import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainWrapper from '../MainWrapper';

const Layout = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
