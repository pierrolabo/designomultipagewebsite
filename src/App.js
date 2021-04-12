import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import WebDesign from "./pages/WebDesign/WebDesign";
import AppDesign from "./pages/AppDesign/AppDesign";
import GraphicDesign from './pages/GraphicDesign/GraphicDesign';
import Locations from './pages/Locations/Locations';
import Contact from "./pages/Contact/Contact";

import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';
import Footer from './components/Footer/Footer';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
     <HeaderContainer/>
     <Router>
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
        <Route path="/graphidesign">
          <GraphicDesign/>
        </Route>
        <Route path="/locations">
          <Locations/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
       </Switch>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;