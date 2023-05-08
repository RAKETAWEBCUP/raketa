import React from 'react'

import './service.sticky.css'
import img1 from '../../assets/img/IRR/pgmR.jpg'
import img2 from '../../assets/img/IRR/teacher.jpg'
import img3 from '../../assets/img/IRR/consulting.jpg'
import styles from '../../assets/styles'
import { TitleText, TypingText } from '../../components'

const data = [
    {img: img1, title: "Des programmes de recherches avancées", desc: "Nous établissons des programmes de recherche qui incluent des études sur les fonctions biologiques et psychologiques des rêves, ainsi que sur leur relation avec la santé mentale et physique. Les études sont faites sur l\'interpretation des rêves. "},
    {img: img2, title: "Des formations spécialisées", desc: "Nous proposons des formations aux jeunes etudiants qui les aideront à approfondir l'analyse des rêves, ainsi devenir des professionnels onirologues. Les chercheurs de l\'institut se consacrent à l\'analyse des rêves et à chercher les possibilités de prédiction."},
    {img: img3, title: "Aides & consultations", desc: "Vous frappez à nos portes et obtenez des consultaions aupres des spécialistes pour mieux comprendre vos reves et avoir les prédictions."},
    // {img: "https://global-uploads.webflow.com/5f84417443f34a30444f52d3/63aeb9c732bfdb41913b2a15_Keep%20knowledge%20current%20v2.webp", title: "Lorem, ipsum indani", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magnam ipsam itaque accusamus necessitatibus eaque dicta perspiciatis suscipit voluptates adipisci?"}
]

function ServiceSticky() {
    return (
        <div 
            className={`${styles.paddings} container-service-sticky relative z-10`}
            id='stiky'
        >
            <div className="gradient-02 z-0" />
            <TypingText title='Les recherches menées' textStyles='text-center'/>
            <TitleText title='Institut International des Rêves' textStyles='text-center' />
            <section className='service-sticky-bottom'>
            {data.map((item, index) => {
                return(
                    <div key={index} className='sticky-row'>
                        {
                            (index%2 === 0) 
                            ? 
                            (
                                <>
                                    <div className='sticky-left'>
                                        <div className='div-p' style={(index%2 === 0) ? {textAlign: 'end'} :{textAlign: 'start'}}>
                                            <h1 className='text-dark dark:text-light'>{item.title}</h1>
                                            <p className='text-dark dark:text-light'>{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className='sticky-right'>
                                        <img src={item.img} alt="img-sticky"/>
                                    </div>
                                </>
                            ) 
                            : 
                            (
                                <>
                                    <div className='sticky-left'>
                                        <img src={item.img} alt="img-sticky"/>
                                    </div>
                                    <div className='sticky-right'>
                                        <div className='div-p' style={(index%2 === 0) ? {textAlign: 'end'} : {textAlign: 'start'}}>
                                            <h1 className='text-dark dark:text-light'>{item.title}</h1>
                                            <p className='text-dark dark:text-light'>{item.desc}</p>
                                        </div>
                                    </div>
                                    
                                </>
                            ) 
                        }
                        
                    </div>
                )
            })
            } 
            </section>
        </div>
    )
}

export default ServiceSticky