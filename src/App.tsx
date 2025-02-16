import Navigation from './components/Navigation';
import Home from './pages/Home';
import AppRouter from './router';
import { UserProvider } from "./store/UserContext";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navigation />
        <Home>
          <AppRouter />
        </Home>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
