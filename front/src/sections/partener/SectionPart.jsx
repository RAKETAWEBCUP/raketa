import React from 'react'
import './section-partenaire.css'
import part1 from '../assets/image/part1.svg'
import part2 from '../assets/image/part2.svg'
import part3 from '../assets/image/part3.svg'
import part4 from '../assets/image/part4.svg'
import part5 from '../assets/image/part5.svg'
import part6 from '../assets/image/part6.svg'
import part7 from '../assets/image/part7.svg'

const tabImg = [
    {src: part1}, {src:part2}, {src:part3}, {src: part4}, {src: part5}, {src: part6}, {src: part7}
]

function SectionPart() {
    return (
        <div className='section section-partenaire'>
            {tabImg.map((item, index) => {return <img alt='sary' key={index} src={item.src}/>})}
        </div>
    )
}

export default SectionPart