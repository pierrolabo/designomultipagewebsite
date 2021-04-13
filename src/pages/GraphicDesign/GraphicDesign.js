import React from 'react'

import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";

import './GraphicDesign.scss';

export default function GraphicDesign() {
    return (
        <section className="graphicdesign">
            <HeaderDesign
                type="graphicdesign--background"
                title="Graphic Design"
                text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
            />
        </section>
    )
}