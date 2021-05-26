import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import UseScrollToTop from './hooks/UseScrollToTop';

import Home from './pages/Home/Home';
import WebDesign from "./pages/WebDesign/WebDesign";
import AppDesign from "./pages/AppDesign/AppDesign";
import GraphicDesign from './pages/GraphicDesign/GraphicDesign';
import Locations from './pages/Locations/Locations';
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";

import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';
import Footer from './components/Footer/Footer';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Designo Agency</title>
        <meta property='og:title' content='Designo Agency'/>
        <meta data-react-helmet="true" property='og:image' content='https://raw.githubusercontent.com/pierrolabo/designomultipagewebsite/develop/preview.jpg'/>
        <meta property='og:description' content='A multi-page website built for a fake design agency'/>
      </Helmet>
     <Router>
     <UseScrollToTop/>
     <HeaderContainer/>
       <Switch>
       
        <Route path="/web-design">
          <WebDesign />  
        </Route>   
        <Route path="/app-design">
          <AppDesign/>
        </Route>
        <Route path="/graphic-design">
          <GraphicDesign/>
        </Route>
        <Route path="/locations">
          <Locations/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
       </Switch>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;