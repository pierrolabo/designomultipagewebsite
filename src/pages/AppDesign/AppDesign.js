import React from 'react'

import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import ProductCard from "../../components/ProductCard/ProductCard";
import CardCategory from "../../components/CardCategory/CardCategory";

import AirfilterImg from "../../assets/app-design/desktop/image-airfilter.jpg";
import EyecamImg from "../../assets/app-design/desktop/image-eyecam.jpg";
import FaceitImg from "../../assets/app-design/desktop/image-faceit.jpg";
import LoopstudiosImg from "../../assets/app-design/desktop/image-loopstudios.jpg";
import TodoImg from "../../assets/app-design/desktop/image-todo.jpg";

import './AppDesign.scss';

export default function AppDesign() {
    return (
    <section className="appdesign">
       <HeaderDesign
        type="appdesign--background"
        title="App design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
       />
       <section className="appdesign__productlist productlist">
       <ProductCard
                    img={AirfilterImg}
                    title="Airfilter"
                    text="  Solving the problem of poor indoor air quality by filtering the air"
        />
        <ProductCard
                    img={EyecamImg}
                    title="Eyecam"
                    text="Product that lets you edit your favorite photos and videos at any time"
        />
        <ProductCard
                    img={FaceitImg}
                    title="Faceit"
                    text="Get to meet your favorite internet superstar with the faceit app"
        />
                    <ProductCard
                                img={TodoImg}
                                title="Todo"
                                text="A todo app that features cloud sync with light and dark mode"
                    />
        <ProductCard
                    img={LoopstudiosImg}
                    title="Loopstudios"
                    text="A VR experience app made for Loopstudios"
        />
       </section>
       <section className="appdesign__category">
                <CardCategory title="WEB DESIGN" link="/web-design"/>
                <CardCategory title="GRAPHIC DESIGN" link="graphic-design"/>
            </section>
    </section>
    )
}