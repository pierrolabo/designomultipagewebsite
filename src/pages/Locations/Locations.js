import React from 'react'

import Location from "../../components/Location/Location";

import './Locations.scss';

export default function Locations() {
    return (
        <section className="locations">
            <Location
                country="Canada"
                office="Designo Central Office"
                street="3886 Wellington Street"
                city="Toronto, Ontario M9C 3J5"
                phone="P : +1 253-863-8967"
                mobile="M : contact@designo.co"
                type="CANADA"
            />
             <Location
                country="Australia"
                office="Designo AU Office"
                street="19 Balonne Street"
                city="New South Wales 2443"
                phone="P : (02) 6720 9092"
                mobile="M : contact@designo.au"
                type="AUSTRALIA"
            />
             <Location
                country="United Kingdom"
                office="Designo UK Office"
                street="13 Colorado Way"
                city="Rhyd-y-fro SA8 9GA"
                phone="P : 078 3115 1400"
                mobile="M : contact@designo.uk"
                type="UK"
            />
        </section>
    )
}