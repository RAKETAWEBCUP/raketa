import React, { useRef } from 'react'

import './section5.css'
import add from '../../asset/img/add.svg'
import equal from '../../asset/img/equal.svg'
import students from '../../asset/img/students.svg'
import professors from '../../asset/img/professor.svg'
import graduation from '../../asset/img/graduation1.svg'
import { useElementOnScreen } from '../../hooks/useIntersectionObservable'

const tab = [
    {
        section: "first",
        number: "01",
        title: "Nouveaux étudiants",
        img: students,
        desc: {
            number: "+ 1300 ",
            p: "nouveaux bacheliers reçus chaque année"
        }
    },
    {
        img: add
    },
    {
        section: "second",
        number: "02",
        title: "Professeurs renommés",
        img: professors,
        desc: {
            number: "+ 50 ",
            p: " professeurs expérimentés à la disposition des élèves"
        }
    },
    {
        img: equal
    },
    {
        section: "third",
        number: "03",
        title: "Etudiants diplômés",
        img: graduation,
        desc: {
            number: "+ 650",
            p: " étudiants prêts à affronter le monde professionnel par an"
        }
    }

]
function Section5() {
    const containerRef = useRef(null)
    const childRef = useRef(null)
    const isVisible = useElementOnScreen({
        root: containerRef.current, 
        rootMargin: "0px",
        threshold: 0.25
    }, childRef)

    return (
        <div className='container-section5' ref={containerRef}>
            <div className='section5-top'>
                <h6>ISPM c'est qui ? c'est quoi ?</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque nobis atque consequatur, dolore suscipit doloremque a nisi blanditiis assumenda qui maiores voluptatem debitis deserunt numquam repellat, facilis cupiditate quod.</p>
            </div>
            <div className='section5-bottom' ref={childRef} >
            {tab.map((element, key) => {
                if(key === 1){
                    return <img key={key} src={element.img} id={isVisible ? "draw-add" : "undraw-add"} className="draw add-icon" alt='add' />
                }else if(key === 3){
                    return <img key={key} src={element.img} id={isVisible ? "draw-equal" : "undraw-equal"} className="draw equal-icon" alt='equal' />
                }else{
                    return(
                        <section key={key} id={element.section} className={(isVisible) ? element.section+" section-show" : "section-hidden"}>
                            <h3>{element.number}</h3>
                            <div className='step'>
                                <h6>{element.title}</h6>
                                <img src={element.img} alt={element.title+"-alt"} />
                            </div>
                            <p> <strong>{element.desc.number}</strong>{element.desc.p}</p>
                        </section>
                    )
                }
            })}
            </div>
        </div>
    )
}

export default Section5