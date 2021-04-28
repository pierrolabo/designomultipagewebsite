import React from 'react'

import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import ProductCard from "../../components/ProductCard/ProductCard";
import CardCategory from "../../components/CardCategory/CardCategory";

import BoxedwaterImg from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import ChangeImg from "../../assets/graphic-design/desktop/image-change.jpg";
import ScienceImg from "../../assets/graphic-design/desktop/image-science.jpg";

import './GraphicDesign.scss';

export default function GraphicDesign() {
    return (
        <section className="graphicdesign">
            <HeaderDesign
                type="graphicdesign__background"
                title="Graphic Design"
                text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
            />
       <section className="graphicdesign__productlist productlist">
       <ProductCard
                    img={ChangeImg}
                    title="Tim Brown"
                    text="A book cover designed for Tim Brown’s new release, ‘Change’"
        />
        <ProductCard
                    img={BoxedwaterImg}
                    title="Boxed water"
                    text="A simple packaging concept made for Boxed Water"
        />
        <ProductCard
                    img={ScienceImg}
                    title="Science!"
                    text="A poster made in collaboration with the Federal Art Project"
        />
       </section>
       <section className="appdesign__category">
                <CardCategory title="APP DESIGN" link="/app-design"/>
                <CardCategory title="WEB DESIGN" link="web-design"/>
            </section>
        </section>
    )
}