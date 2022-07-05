import './App.css';
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Clothes from './pages/Clothes';
import ClothesDetail from './pages/ClothesDetail';



function App() {
  return (
   <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = '/' component={Home} /> 
        <Route exact path = '/clothes' component={Clothes} />
        <Route exact path = '/clothes-detail' component={ClothesDetail} />
      </Switch>
      <Search />
      <Footer />
   </BrowserRouter>
  );
}

export default App;
