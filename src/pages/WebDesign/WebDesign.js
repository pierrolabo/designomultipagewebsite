import React from 'react'

import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";

import "./WebDesign.scss";

export default function WebDesign() {
    return (
        <section className="webdesign">
            <HeaderDesign 
                type="webdesign--background" 
                title="Web design"
                text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
            />
        </section>
    )
}