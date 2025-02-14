import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./hooks/useUser";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
