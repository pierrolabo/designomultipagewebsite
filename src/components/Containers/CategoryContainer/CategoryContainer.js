import React from 'react'

import CardCategory from '../../CardCategory/CardCategory';

import './CategoryContainer.scss';

export default function CategoryContainer() {
    return(
        <section className="categorycontainer">
            <CardCategory title="WEB DESIGN" link="/" />
            <CardCategory title="APP DESIGN" link="/" />
            <CardCategory title="GRAPHIC DESIGN" link="/" />
        </section>
    )

}