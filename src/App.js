import './App.css';
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home';



function App() {
  return (
   <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = '/' component={Home} /> 
      </Switch>
   </BrowserRouter>
  );
}

export default App;
