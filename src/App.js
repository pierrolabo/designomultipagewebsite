import React from 'react';
import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';
import Hero from './components/Hero/Hero';
import CategoryContainer from './components/Containers/CategoryContainer/CategoryContainer';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
     <HeaderContainer/>
     <main>
     <Hero/>
     <CategoryContainer/>
      <h1>pwet pwet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus dignissimos, accusamus alias nisi unde quod ullam vitae dolores ipsam blanditiis illo saepe maxime praesentium soluta? A, corrupti provident quis magni perferendis est culpa quos temporibus deleniti. Eaque ratione, facilis amet perferendis beatae saepe tempore? Quasi animi quaerat ipsum asperiores.</p>
     </main>
    </div>
  );
}

export default App;
