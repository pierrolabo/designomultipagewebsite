import React from 'react'

import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import ProductCard from "../../components/ProductCard/ProductCard";

import ExpressImg from '../../assets/web-design/desktop/image-express.jpg';
import TransferImg from '../../assets/web-design/desktop/image-transfer.jpg';
import BlogrImg from '../../assets/web-design/desktop/image-blogr.jpg';
import BuilderImg from '../../assets/web-design/desktop/image-builder.jpg';
import CampImg from '../../assets/web-design/desktop/image-camp.jpg';
import PhotonImg from '../../assets/web-design/desktop/image-photon.jpg';

import "./WebDesign.scss";

export default function WebDesign() {
    return (
        <div className="webdesign">
            <HeaderDesign 
                type="webdesign--background" 
                title="Web design"
                text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
            />
            <section className="webdesign__productlist productlist">
                <ProductCard
                    img={ExpressImg}
                    title="Express"
                    text="A multi-carrier shipping website for ecommerce businesses"
                />
                <ProductCard
                    img={TransferImg}
                    title="Transfer"
                    text="Site for low-cost money transfers and sending money within seconds"
                />
                <ProductCard
                    img={PhotonImg}
                    title="Photon"
                    text="A state-of-the-art music player with high-resolution audio and DSP effects"
                />
                    <ProductCard
                        img={BuilderImg}
                        title="Builder"
                        text="Connects users with local contractors based on their location"
                        />
                <ProductCard
                    img={BlogrImg}
                    title="Blogr"
                    text="Blogr is a platform for creating an online blog or publication"
                    style= {{maxWidth: '30ch'}}
                />
                <ProductCard
                    img={CampImg}
                    title="Camp"
                    text="Get expert training in coding, data, design, and digital marketing"
                />
            </section>
        </div>
    )
}