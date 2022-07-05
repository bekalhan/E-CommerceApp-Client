import './App.css';
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Clothes from './pages/Clothes';
import ClothesDetail from './pages/ClothesDetail';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart';
import Navbar from './components/Navbar/Navbar';
import PrivateProtectRoute from './pages/ProtectedRoutes/PrivateProtectRoute';



function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path = '/' component={Home} /> 
        <Route exact path = '/product/:category' component={Clothes} />
        <Route exact path = '/product/:id' component={ClothesDetail} />
        <PrivateProtectRoute exact path = "/cart" component={Cart} />
      </Switch>
      <Search />
      <Footer />
   </BrowserRouter>
  );
}

export default App;
