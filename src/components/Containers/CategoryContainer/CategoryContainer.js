import React from 'react'

import CardCategory from '../../CardCategory/CardCategory';

import './CategoryContainer.scss';

export default function CategoryContainer() {
    return(
        <section className="categorycontainer">
            <CardCategory title="WEB DESIGN" link="/webdesign" />
            <CardCategory title="APP DESIGN" link="/appdesign" />
            <CardCategory title="GRAPHIC DESIGN" link="/graphicdesign" />
        </section>
    )

}