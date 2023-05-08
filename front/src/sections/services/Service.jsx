import React, { useEffect } from 'react'

import './service.css'
import CardService from '../../components/cards/CardService'
import { TitleText, TypingText } from '../../components'
import styles from '../../assets/styles'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'

const data = [
    {
        icon: "https://cdn.sanity.io/images/l5rq9j6r/production/ee00e3a48b0275a66520871caff6a3c5792f0bc7-96x96.svg", title: "Qu'est ce que c'est ? Comment ca, les cauchemars ne predisent rien ?", 
        desc: "Ca peut paraitre contradictoire mais les resultats des recherches ont prouve que les cauchemars ne predisent rien et ne sont signes d'un avenir chaotique. Il est preferable de consulter un professionnel car il se peut que ce soit a cause de certains facteurs quotidiens reels.",
        link: "#1"
    }
]

function Service() {

    const [mode, setMode] = useThemeSwitcher();
    const userPref = window.localStorage.getItem('mode');
    useEffect(() => {
        let test = true
        setMode(userPref)
        return () => {
            test = false
        }
    }, [mode])
    

    return (
        <div className={`container-service ${styles.paddings} relative z-10`} id='about'>
            <TypingText title='ATTENTION' textStyles='text-center'/>
            <TitleText title="Ce qu'il faut savoir avant l'expérience" textStyles='text-center' />
            <section className='section-bottom text-dark dark:text-light gap-4'>
                <div className='w-[400px] h-[400px] bg-blanck dark:bg-blak ' style={{backgroundPosition: 'center', backgroundSize: 'contain'}}></div>
                {/* <img src='/black.gif' alt="alert" className='pb-[20px] rounded-2xl bg-dark'/> */}
                {
                    data.map((item, index) => {
                        return (
                            <CardService key={index} item={item} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Service