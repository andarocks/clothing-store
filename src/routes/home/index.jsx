import { Outlet } from 'react-router-dom';

import Categories from '../../components/category-directory';

const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
};

export default Home;
