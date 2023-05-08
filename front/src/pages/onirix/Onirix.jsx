import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {TiDeleteOutline} from 'react-icons/ti'
import {AiOutlineHistory} from 'react-icons/ai'
import Fermeture from '../../sections/fermeture/Fermeture'

import './onirix.css'
import dreamCatch from '../../asset/img/dreamCatch.png'
import nuage from '../../asset/img/bluePaint.png'
import bgBlue from '../../asset/img/blueLight.png'
import { Modal, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHistoryAsync } from '../../features/historyPredicat.slice'

const data = [
    {type: "0", preditcat: "Cela peut etre causé par la manque de confiance en soi ou la peur d'être humilié. Mais les cauchemars ne prédisent rien, il vaut mieux consulter un médecin", date: "02/02/2033"},
    {type: "0", preditcat: "La peur de ne pas être assez compétent ou une surcharge de travail entraîner des cauchemars de ce genre. Il vaut mieux consulter un médecin.", date: "02/30/2022"}
]
function Onirix() {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false);
    const [oneData, setOneData] = useState(null)
    const dispatch = useDispatch()
    const histories = useSelector(({histories}) => console.log(histories))
    useEffect(() => {
       
    },[])

    function handlerHistory(item){
        // axios.get('nedbyebf', {id: item.id})
        // .then((response) => {
        //     setOneData(response.data)
        // })
        setOpen(true)
    }

    return (
        <div className='container-onirix'>
            <div className='div-left'>
                <img src={nuage} alt="nuage-onix" />
                <img src={dreamCatch} alt="dream-catch" />
                <img src={bgBlue} alt="bg-blue" />
                <Fermeture />
            </div>
            <div className='div-middle'>
                <Outlet />
            </div>
            <div className='div-right pt-2'>
            {data ? data.map((item, index) => {
                return(
                    <button key={index} className='item-history' onClick={() =>handlerHistory(item)}>
                        <AiOutlineHistory className='icon-history'/>
                        <p>{item.preditcat}</p>
                        <TiDeleteOutline  className='icon-history'/>
                    </button>
                )
            }):
            <div>Vide</div> 
            }
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Cauchemar
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                La peur de ne pas être assez compétent ou une surcharge de travail entraîner des cauchemars de ce genre. Il vaut mieux consulter un médecin.
               </Typography>
                </div>
            </Modal>
            </div>
        </div>
    )
}

export default Onirix