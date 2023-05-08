import React from 'react'
import './section2.css'

function Section2() {

    const tabCard = [
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fbb477795a2/6238bb666441e34af0a37fba_icons.svg", title: "Connect to users from your audience", p:"Find your target users wherever they are and whatever they do and see your product through their eyes."},
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fbb477795a2/6217a5a27745a70b4187afd8_icons-1.svg", title: "Make research a team effort – and benefit", p:"Invite others to take part in research sessions so they can hear first hand what users need, want and feel."},
        {img: "https://uploads-ssl.webflow.com/5d7142044df04fbb477795a2/6217a5a2c9dfd315b62ea038_icons-2.svg", title: "Use one platform for the entire research workflow", p:"No need for plugins, workarounds or even a new tab. Automate and manage the research process through a single interface."},
    ]

    return (
        <div className='section section-two'>
            <div className='section-two-top'>
                <h1 className='p-title'>Get feedback that <br/>makes a difference</h1>
                <p className='p'>PingPong takes care of all your remote UX research needs in one <br/> place, so you can focus on what matters most: building products <br /> users will love.</p>
            </div>
            <div className='section-two-bottom'>
            {tabCard.map((item, index) => {
                return(
                    <div className={"card card"+index} key={index}>
                        <div className='container-card-img'>
                            <img src={item.img} alt="icon-card" />
                        </div>
                        <div className='container-desc'>
                            <h6>{item.title}</h6>
                            <p>{item.p}</p>   
                        </div>
                        
                    </div>
                )
            })}
            </div>
        </div>
    )   
}

export default Section2