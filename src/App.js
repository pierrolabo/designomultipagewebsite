import React from 'react';
import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';
import Hero from './components/Hero/Hero';
import CategoryContainer from './components/Containers/CategoryContainer/CategoryContainer';
import Quality from './components/Quality/Quality';
import Footer from './components/Footer/Footer';

import './styles/main.scss';
import './Home.scss';

import IllustrationPassionate from './assets/home/desktop/illustration-passionate.svg';
import IllustrationFriendly from './assets/home/desktop/illustration-friendly.svg';
import IllustrationResourceful from './assets/home/desktop/illustration-resourceful.svg';

function App() {
  return (
    <div className="App">
     <HeaderContainer/>
     <main>
     <Hero/>
     <CategoryContainer/>
     <section className="quality__container">
      <Quality 
        title="Passionate" 
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
        art, design, and technology into exciting new solutions." 
        image={IllustrationPassionate} />
        <Quality 
        title="Resourceful" 
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
        collaboration. It guarantees superior results that fulfill our clients’ needs." 
        image={IllustrationFriendly} />
        <Quality 
        title="Friendly" 
        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
        strive to give them the best experience a company can provide." 
        image={IllustrationResourceful} />
     </section>
     <section>
       <h1>pwet</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates, ab corrupti vel laboriosam dolorum. Est ullam natus, aut officiis quam obcaecati numquam eveniet. Enim, odit nihil saepe officia illo molestias, illum doloremque expedita rem neque magnam aperiam voluptate, quam molestiae. Nemo magnam deserunt vel qui sint voluptate mollitia ea.</p>
     </section>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
