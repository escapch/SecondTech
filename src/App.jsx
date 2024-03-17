import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Phone from './pages/Phone';
import Home from './pages/Home';
import PhoneDeatails from './components/PhoneDetails';
import Cart from './pages/Cart';
import Favorits from './pages/Favorits';
import Laptop from './pages/Laptop';
import AppRoutes from './components/Routes/Routes';
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
