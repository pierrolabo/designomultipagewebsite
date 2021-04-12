import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
     <Router>
     <UseScrollToTop/>
     <HeaderContainer/>
       <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/webdesign">
          <WebDesign />  
        </Route>   
        <Route path="/appdesign">
          <AppDesign/>
        </Route>
        <Route path="/graphicdesign">
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