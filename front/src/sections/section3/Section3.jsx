import React from 'react'
import '../assets/css/section3.css'

function Section3() {
    return (
        <div className='section section-three'>
            <div className='sect3-left'>
                <h3 className='h-title'>RECRUIT</h3>
                <p className='p-title'>Reach testers in minutes</p>
                <p className='p'>From consumers to working professionals, get access to more <br /> than 175,000 testers from all over the world.</p>
                <button className="button btn-other">Learn more</button>
            </div>
            <div className='sect3-right'>
                <img src="https://uploads-ssl.webflow.com/5d7142044df04fbb477795a2/6217abb57ff1b760f9f1f14f_recruit%20visual.png" alt="img-sect3" />
            </div>
        </div>
    )
}

export default Section3