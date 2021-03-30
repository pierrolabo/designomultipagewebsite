import React from 'react';
import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';
import Hero from './components/Hero/Hero';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
     <HeaderContainer/>
     <main>
     <Hero/>
     <div>
       <h1>pwet pwet</h1>
     </div>

     </main>
    </div>
  );
}

export default App;
