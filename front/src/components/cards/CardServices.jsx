import React from 'react'

import './card.service.css'

// define "lord-icon" custom element with default properties

function CardService({item}, {index}) {
    return (
        <div key={index} className='service-card'>
            <section className='card-top'>
                {/* <img src={item.icon} alt="service-card-img" /> */}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </section>
            <section className='card-bottom'>
                <button><a href={item.link}>Read more</a></button>
            </section>
        </div>
    )
}

export default CardService