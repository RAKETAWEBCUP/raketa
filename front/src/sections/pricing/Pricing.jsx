import React from 'react'
import {BiMessageSquareCheck} from 'react-icons/bi'

import './pricing.css'

const data = [
    {categorie: "Personnal", price: "Free",
        desc: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id.",
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio at recusandae itaque ipsam. Sapiente, illum."
        ],
    color: "#a7a7a7"
    },
    {categorie: "Professional", price: "12€",
        desc: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio at recusandae itaque ipsam. Sapiente, illum.",
            "Lorem, ipsum."
        ],
    color: "#5381ff"
    },
    {categorie: "Business", price: "30€",
        desc: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id.",
            "Lorem ipsum dolor sit cdcdc zdzzrth- h-rh-rh.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio at recusandae itaque ipsam. Sapiente, illum.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium harum quos reiciendis illo mollitia voluptate corporis ab officiis? Non atque enim blanditiis! Repellendus, est illo perspiciatis commodi at rerum?"
        ],
    color: "#e9ba21"
    }
]

function Pricing() {
    return (
        <div className='container-pricing'>
            <section className='pricing-top'>
                <h1>Ato amin'ny pricing indray izao</h1>
            </section>
            <section className='pricing-bottom'>
            {data.map((item, index) => {
                return(
                    <div key={index} className='pricing-card' style={{'--pricing-color': item.color}}>
                        <section className='section-top'>
                            <h3>{item.categorie}</h3>
                            <span><strong>{item.price}</strong>{(item.price!=="Free") && "/month"}</span>
                        </section>
                        <section className='section-middle'>
                        {item.desc.map((element, key) => {
                            return(
                                <div key={key} className='pricing-desc'>
                                    <BiMessageSquareCheck className='icon-element-pricing'/> 
                                    <p>{element}</p>
                                </div>
                            )
                        })} 
                        </section>
                        <section className='section-bottom'>
                            <button><a href="#price">Get this option</a></button>
                        </section>
                    </div>
                )
            })}
            </section>
        </div>
    )
}

export default Pricing