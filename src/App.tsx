import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home"));
const Character = lazy(() => import("./components/pages/Character"));
const Favorites = lazy(() => import("./components/pages/Favorites"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path=":id" element={<Character />} />
    </Routes>
  );
};

export default App;
