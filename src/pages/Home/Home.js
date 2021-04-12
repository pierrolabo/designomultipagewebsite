import React from 'react'

import CategoryContainer from '../../components/Containers/CategoryContainer/CategoryContainer';
import Hero from '../../components/Hero/Hero';
import Quality from '../../components/Quality/Quality';

import IllustrationPassionate from '../../assets/home/desktop/illustration-passionate.svg';
import IllustrationFriendly from '../../assets/home/desktop/illustration-friendly.svg';
import IllustrationResourceful from '../../assets/home/desktop/illustration-resourceful.svg';

import './Home.scss';

export default function Home() {
    return (
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
        image={IllustrationResourceful} />
        <Quality 
        title="Friendly" 
        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
        strive to give them the best experience a company can provide." 
        image={IllustrationFriendly} />
     </section>
     </main>
    )
}