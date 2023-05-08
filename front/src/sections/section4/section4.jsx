import React from 'react'
import '../assets/css/section4.css'

export default function Section4() {
    return (
        <div className='section section-four'>
            <div className='sect4-left'>
                <img src='https://uploads-ssl.webflow.com/5d7142044df04fbb477795a2/6217abb5770ae431fe2e6c8e_call.png' alt='img-sect4' />
            </div>
            <div className='sect4-right'>
                <h3 className='h-title'>CALL</h3>
                <p className='p-title'>Get onto a video call in a few taps</p>
                <p className='p'>Connect with users without ever leaving PingPong using our <br/> built-in video call tool – just log in when your interview begins.</p>
                <button className="button btn-other">Learn more</button>
            </div>
        </div>
    )
}
