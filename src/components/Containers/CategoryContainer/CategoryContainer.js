import React from 'react'

import CardCategory from '../../CardCategory/CardCategory';

import './CategoryContainer.scss';

export default function CategoryContainer() {
    return(
        <section className="categorycontainer">
            <CardCategory title="WEB DESIGN" link="/web-design" />
            <CardCategory title="APP DESIGN" link="/app-design" />
            <CardCategory title="GRAPHIC DESIGN" link="/graphic-design" />
        </section>
    )

}