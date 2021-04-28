import React from 'react'

import LocationsCard from '../../components/LocationsCard/LocationsCard';

import './About.scss';

export default function About() {
    return (
        <section className="about">
            <section className="about__card card--hero">
                <div className="about__card__img img img--hero" alt="team working together"/>
                <div className="about__card__content hero--content">
                    <h1 className="about__card__content__title hero--content--title">About Us</h1>
                    <p className="about__card__content__text hero--content--text">Founded in 2010, we are a creative agency that produces lasting results for our clients. 
    We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
    that make real impact. We’re always looking forward to creating brands, products, and 
    digital experiences that connect with our clients audiences.</p>
                    </div>
            </section>
            <section className="about__card card--talent">
                <div className="about__card__img img img--talent" alt="coworker looking at pictures"/>
                <div className="about__card__content talent--content">
                    <h1 className="about__card__content__title">World-class talent</h1>
                    <p className="about__card__content__text">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
  crafted from concept to launch, ensuring success in its given market. We are constantly updating 
  our skills in a myriad of platforms.
  </p>
  <p className="about__card__content__text">Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
  are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
  Clients have always been impressed with our high-quality outcomes that encapsulates their 
  brand’s story and mission.</p>
                    </div>
            </section>
            <LocationsCard/>
            <section className="about__card card--realdeal">
                <div className="about__card__img img img--realdeal" alt="coworker putting picture on wall"/>
                <div className="about__card__content realdeal--content">
                    <h1 className="about__card__content__title">The real deal</h1>
                    <p className="about__card__content__text">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
  Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
  opportunity. We make design and technology more accessible and give you tools to measure success.
  </p>
  <p className="about__card__content__text">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
  we inspire audiences to take action and drive real results.</p>
                    </div>
            </section>
        </section>
    )
}