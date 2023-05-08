import React from 'react'
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'

import './input.css'

export const Myinput = ({label, icon, type, name, required, placeholder, handler, disable, style}) => {

    const [showPassword, setShowPassword] = React.useState(false)
    const IconElement = React.createElement(icon, {className: "icon-input"})

    return(
        <div className='div-input div-email'>
            <label htmlFor="">{label}</label>
            <div className='my-input' style={style}>
                {(IconElement.type === undefined) ? null : IconElement}
                <>
                    <input
                        disabled={disable}
                        placeholder={placeholder}
                        type={(type === "password") ? (showPassword) ? "text" : "password" : type}
                        required={required}
                        name={name}
                        onChange={handler}
                    />
                    {(name.includes("passwordY")) ? (showPassword) ? <IoEyeOutline className='icon' style={{marginRight: "5px"}} onClick={() => setShowPassword(!showPassword)}/> : <IoEyeOffOutline className='icon' style={{marginRight: "5px"}} onClick={() => setShowPassword(!showPassword)}/>: null}
                </>
            </div>
        </div>
    )
}
