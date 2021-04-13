import React from 'react'

import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";

import './AppDesign.scss';

export default function AppDesign() {
    return (
    <section className="appdesign">
       <HeaderDesign
       type="appdesign--background"
        title="App design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
       />
    </section>
    )
}