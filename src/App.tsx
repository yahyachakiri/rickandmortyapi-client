import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import AppLayout from '@components/layout';
const Home = lazy(() => import("./components/pages/Home"));
const Character = lazy(() => import("./components/pages/Character"));
const Favorites = lazy(() => import("./components/pages/Favorites"));
// const Page1 = lazy(() => import('@pages/admin/page1'));
// const NoMatch = lazy(() => import('@pages/404'));

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<AppLayout />}> */}
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path=":id" element={<Character />} />
    </Routes>
  );
};

export default App;
