import { Routes, Route } from "react-router-dom";
import Todos from "../pages/Todos";
import Posts from "../pages/Posts";
import Photos from "../pages/Photos";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
  );
};

export default AppRouter;
