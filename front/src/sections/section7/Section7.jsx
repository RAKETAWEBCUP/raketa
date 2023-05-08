import React from 'react'
import './section7.css'

export default function Section7() {

    const tabCard=[
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/61fa85851c90f65c9a1ea5de_UXR-conf-2022-thumbnail.jpg", icon: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/618910c93cbf5c8a7eb93547_tomi.png", autor: "Thomas", date: "January 17, 2022", title: "UX research conference in 2022", content: "It's a new year, with a new and updated list of conferences! Keep up with changes and developments in the industry. As you start to build your roadmap for the year, we've put together a list of UXR conferences that'll help keep you at the top of your game. "},
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/61aa0b2a4de5570a886cf3c5_Tester%20types-thumbnail.jpg", icon: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/618910c93cbf5c8a7eb93547_tomi.png", autor: "Thomas", date: "December 03, 2021", title: "6 usability tester archetypes and how to handle them", content: "We’ve all met them. The tester who talks too much, too little or too polished. The good news is, even if you can’t change their behaviour, you can tweak yours to effectively manage them."},
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/617aa4100c264f9fcee84f0b_Starting%20UX%20research-thumbnail.jpg", icon:"https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/618910e7c48a2163206c000a_zsolti.png", autor: "Zsolt", date: "October 28, 2022", title: "7 things to think about before starting UX research project ", content: "I was recently asked if I had any tips for someone who is just getting into UX research. Here are the seven most important things I’ve learned doing user interviews over the past ten years."},
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/61aa0b2a4de5570a886cf3c5_Tester%20types-thumbnail.jpg", icon: "https://uploads-ssl.webflow.com/5d7142044df04fda1a7795b9/618910c93cbf5c8a7eb93547_tomi.png", autor: "Thomas", date: "December 03, 2021", title: "6 usability tester archetypes and how to handle them", content: "We’ve all met them. The tester who talks too much, too little or too polished. The good news is, even if you can’t change their behaviour, you can tweak yours to effectively manage them."},

    ]

    return (
        <div className='section section-seven'>
            <h1 >The latest Section</h1>
            <div className='container-card-sect7'>
            {tabCard.map((item, index) => {
                return(
                    <div key={index} className='card-sect7'>
                        <div className='card-sect7-top'>
                            <div><img src={item.img} alt={'image-'+index} /></div>
                            <div id="container-autor">
                                <img src={item.icon} alt={'icone-'+index} />
                                <span>{item.autor}</span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                        <div className='card-sect7-bottom'>
                            <h3 className="">{item.title}</h3>
                            <p className="p">{item.content}</p>
                            <span>Read more</span>
                        </div>
                    </div>
                )     
            })}
            </div>
        </div>
    )
}
