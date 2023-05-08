import React, { useState } from 'react'

import evil from '../../asset/img/IRR/consulting.jpg'
import paradise from '../../asset/img/IRR/teacher.jpg'
import self from '../../asset/img/self-icon.png'
import job from '../../asset/img/job-icon.png'
import maladie from '../../asset/img/desease.png'
import coeur from '../../asset/img/heart.png'
import fired from '../../asset/img/fired.png'
import blame from '../../asset/img/blame.png'
import success from '../../asset/img/success.png'
import vision from '../../asset/img/vision.png'
import project from '../../asset/img/project.png'
import salary from '../../asset/img/salary.png'
import paradisa from '../../asset/img/Paradisa.jpg'
import devil from '../../asset/img/Evil.png'
import {GiDreamCatcher} from 'react-icons/gi'

import './simulator.css'
import { Modal, Typography } from '@mui/material'

const tab1 = [
    {img: self, title: "Personnel", desc: "Un rêve concernant votre personne."},
    {img: job, title: "Professionnel", desc: "Un rêve sur votre vie professionnelle"},
]
const personnel0 = [
    {img: maladie, title: "Maladie", desc: "Un rêve  décrivant une maladie"},
    {img: coeur, title: "Amour", desc: "Un rêve  décrivant une situation amoureuse"}
]
const personnel1 = [
    {img: success, title: "Reussite personnelle", desc: "Un rêve  décrivant la réussite presonnelle"},
    {img: vision, title: "Une personne en particulier", desc: "Un rêve  décrivant une situation avec une personne en particulier"}
]
const professionnel0 = [
    {img: fired, title: "Licenciement", desc: "Un rêve  décrivant un licenciement"},
    {img: blame, title: "Harcelement", desc: "Un rêve  décrivant un harcelement"}
]
const professionnel1 = [
    {img: salary, title: "Augmentation de salaire", desc: "Un rêve  décrivant une augmentation de salaire"},
    {img: project, title: "Réalisation d'un projet", desc: "Un rêve  décrivant la réalisation d'un projet"}
]

function Simulator() {
    const [response, setResponse] = useState("")
    const [step, setStep] = useState(0)
    const [open, setOpen] = useState(false)
    const [data, setData] =  useState({
        step1: "",
        step2: "",
        step3: ""
    })

    function handlerData(title){
        setData((prev) => ({...prev, step3: title.target.id}))

        if(data.step1 === "0" && data.step2 === "Personnel" && data.step3 === "Maladie") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Cela peut etre causé par la peur, la crainte ou la préoccupation concernant la santé. Mais les cauchemars ne prédisent rien, il vaut mieux consulter un médecin",
                "Le manque de sommeil peut entraîner des cauchemars de ce genre. Il vaut mieux consulter un médecin."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "0" && data.step2 === "Personnel" && data.step3 === "Amour") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Cela peut etre causé par trahison, une dispute, une tromperie ou un conflit. Mais les cauchemars ne prédisent rien, il vaut mieux consulter un médecin",
                "La crainte de l'engagement peut entraîner des cauchemars de ce genre. Il vaut mieux consulter un médecin."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "0" && data.step2 === "Professionnel" && data.step3 === "Licenciement") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Cela peut etre causé par la manque de confiance en soi ou la peur d'être humilié. Mais les cauchemars ne prédisent rien, il vaut mieux consulter un médecin",
                "La peur de ne pas être assez compétent ou une surcharge de travail entraîner des cauchemars de ce genre. Il vaut mieux consulter un médecin."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "0" && data.step2 === "Professionnel" && data.step3 === "Harcelement") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Cela peut etre causé par la peur, la crainte ou la préoccupation concernant la santé. Mais les cauchemars ne prédisent rien, il vaut mieux consulter un médecin",
                "Le manque de sommeil peut entraîner des cauchemars de ce genre. Il vaut mieux consulter un médecin."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "1" && data.step2 === "Personnel" && data.step3 === "Reussite personnelle") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Cela peut prédire une obtention de diplôme ou d'une réussite à un examen, par exemple.",
                "Cela peut prédire la venue d'un période de voyage tant attendu ou d'un évènement tant espéré."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "1" && data.step2 === "Personnel" && data.step3 === "Une personne en particulier") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Cela peut une rencontre avec la personne ou de la croiser",
                "Cela peut prédire que l'on va passer des moments avec la personne."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "1" && data.step2 === "Professionnel" && data.step3 === "Augementation de salaire") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Il se peut que cela se produise dû à un effort fourni",
                "Cela peut prédire que l'on soit promuà un poste espéré."
            ]
            setResponse(tab[randomNum])
        }
        if(data.step1 === "1" && data.step2 === "Professionnel" && data.step3 === "Realisation d'un projet") {
            const randomNum = Math.floor(Math.random() * 2);
            let tab = [
                "Il se peut que l'on soit sur la bonne voie grâce au fait l'on veuille être sur cette voie.",
                "Cela peut prédire que même si le projet ne se réalise pas, cela contribue à une autre réussite"
            ]
            setResponse(tab[randomNum])
        }
        (response)&&setOpen(true)
        // setOpen(true)
    }
    

    return (
        <div className='container-simulator'>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal-box rounded-xl text-center'>
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography> */}
                <GiDreamCatcher className='mx-auto text-[60px] mb-4' />
                <Typography id="modal-modal-description" sx={{ mt: 0, fontSize: "24px" }}>
                    {(response) && response}
               </Typography>
                </div>
            </Modal>
            {(step=== 0) ?
            <>
                <div className='simulator-top'>
                    <h1>Bienvenue dans la simulation d' <strong>ONIRIX</strong></h1>
                    <h1>Choisissez votre type de rêve</h1>
                </div>
                <div className='simulator-bottom'>
                    <button index="0" className='card-choice' name='step1' id='1' onClick={(e) => {setData((prev) => ({...prev, step1: "1"})); setStep(step+1)}}>
                        <img src={paradisa} alt="img-choice" />
                        <div className='card-choice-div-span'>
                            <span>BEAU REVE</span>
                        </div>
                    </button>
                    <button index="0" className='card-choice' name='step1' id='0' onClick={(e) => {setData((prev) => ({...prev, step1: "0"})); setStep(step+1)}}>
                        <img src={devil} alt="img-choice" />
                        <div className='card-choice-div-span'>
                            <span>CAUCHEMAR</span>
                        </div>
                    </button>
                </div>
            </>
            :(step=== 1)
            ?<>
                <div className='simulator-top'>
                    <h1>Sur quel sujet se tourne votre rêve?</h1>
                </div>
                <div className='simulator-bottom'>
                {tab1.map((item, index) => {
                    return(
                        <button className="card2" key={index} name='step2' id={item.title} onClick={(e) => {setData((prev) => ({...prev, step2: item.title}));  setStep(step+1)}}>
                            <div className='container-img'>
                                <img src={item.img} alt="icon-simu2" />
                            </div>
                            <div className='container-desc'>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>   
                            </div>
                        </button>
                    )
                })}
                </div>
            </>:(step=== 2) &&
            <>
            <div className='simulator-top'>
                    <h1>Sur quel sujet?</h1>
                </div>
                <div className='simulator-bottom'>
                {
                    (data.step1 === "0") ?
                        (data.step2 === "Personnel") ?
                        <>
                            {personnel0.map((item, index) => {
                                return(
                                    <button className="card2" key={index} name='step3' id={item.title} onClick={(e) => {setData((prev) => ({...prev, step3: item.title}));  setStep(step+1)}}>
                                        <div className='container-img'>
                                            <img src={item.img} alt="icon-simu2" />
                                        </div>
                                        <div className='container-desc'>
                                            <h6>{item.title}</h6>
                                            <p>{item.desc}</p>   
                                        </div>
                                    </button>
                                )
                            })}
                        </> : (data.step2 === "Professionnel") && 
                        <>
                            {professionnel0.map((item, index) => {
                                return(
                                    <button className="card2" key={index} name='step3' id={item.title} onClick={(event) => handlerData(event)}>
                                        <div className='container-img'>
                                            <img src={item.img} alt="icon-simu2" />
                                        </div>
                                        <div className='container-desc'>
                                            <h6>{item.title}</h6>
                                            <p>{item.desc}</p>   
                                        </div>
                                    </button>
                                )
                            })}
                        </>
                    : (data.step2 === "Personnel") ?
                    <>
                    {personnel1.map((item, index) => {
                        return(
                            <button className="card2" key={index} name='step3' id={item.title} onClick={(e) => handlerData(e)}>
                                <div className='container-img'>
                                    <img src={item.img} alt="icon-simu2" />
                                </div>
                                <div className='container-desc'>
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>   
                                </div>
                            </button>
                        )
                    })}
                    </> : (data.step2 === "Professionnel") && 
                    <>
                        {professionnel1.map((item, index) => {
                            return(
                                <button className="card2" key={index} name='step3' id={item.title} onClick={(e) => handlerData(e)}>
                                    <div className='container-img'>
                                        <img src={item.img} alt="icon-simu2" />
                                    </div>
                                    <div className='container-desc'>
                                        <h6>{item.title}</h6>
                                        <p>{item.desc}</p>   
                                    </div>
                                </button>
                            )
                        })}
                    </>
                }
                </div>
            </>
            }
        </div>
    )}

export default Simulator