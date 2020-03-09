import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//pages
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/Default';
import Cart from './pages/CartPage';

//components
// not need now import Header from './components/Header';
import Navbar from './components/Navbar';
// import SideCart from './components/SideCart';
import Footer from './components/Footer';
class App extends Component {
  render (){
    return <Router>
    {/*navbar, sidebar, cart, footer */}
    <Navbar/> 
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/about">
          <About/>
        </Route>
        <Route  path="/contact">
          <Contact/>
        </Route>
        <Route  path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/products/:id">
          <SingleProduct/>
        </Route>
        <Route  >
          <Default/>
        </Route>
      </Switch>    
      <Footer/> 
    </Router>;
  }
}




export default App;
