import { Outlet } from 'react-router-dom';
import AppTitle from './AppTitle';
import Navbar from './Navbar';

const MainPageLayout = () => {
  return (
    <div>
      <AppTitle/>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainPageLayout;
