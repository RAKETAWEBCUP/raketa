import React, { useState } from 'react'
import axios from 'axios'
import {FcGoogle} from 'react-icons/fc'
import {IoKeyOutline} from 'react-icons/io5' 
import { AiOutlineUser } from 'react-icons/ai'
import {MdFacebook, MdMailOutline} from 'react-icons/md'
import {VscSymbolNamespace} from 'react-icons/vsc'

import './signup.css'
import { Myinput } from '../../components/inputs/MyInput'
import Right from '../../asset/img/signin.svg'
import img from '../../asset/img/logoR.png'

import nuage from '../../asset/img/nuage.png'
import catch1 from '../../asset/img/dreamCatch3.png'
import catch2 from '../../asset/img/dreamCatch2.png'

function Signup() {

    const [create, setCreate] = useState(false)
    const [condition, setCondition] = useState({email: false, pseudo: false})
    const [message, setMessage] = useState({email: "", pseudo: "", password: ""})
    const [user, setUser] = useState({
        name: "",
        pseudo: "",
        email: "",
        password: "",
        cpassword: ""
    })

    function checkedEmail(){
        axios.post('http://localhost:8080/user/findEmail', {email: user.email})
        .then((response) => {
            setCondition((prev) => ({...prev, email: response.data.done}))
            setMessage((prev) =>({...prev, email:""}))
        })
        .catch((error) => {
            if(error.response.status === 401){
                console.log(error.response.data)
                setCondition((prev) => ({...prev, email: error.response.data.done}))
                setMessage((prev) =>({...prev, email:error.response.data.message}))
            }
        })
    }
    function checkedPseudo(){
        axios.post('http://localhost:8080/user/findPseudo', {pseudo: user.pseudo})
        .then((response) => {
            setMessage((prev) =>({...prev, pseudo:""}))
            setCondition((prev) => ({...prev, pseudo: response.data.done}))
        })
        .catch((error) => {
            if(error.response.status === 401){
                setCondition((prev) => ({...prev, pseudo: error.response.data.done}))
                setMessage((prev) =>({...prev, pseudo:error.response.data.message}))
            }
        })
    }

    function isPasswordValid (){
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        let test = regex.test(user.password);
        if(test){
            if(user.password === user.cpassword){
                setMessage((prev) => ({...prev, password:""}))
                return true
            }else{
                setMessage((prev) => ({...prev, password:"Les mots de passes ne sont pas identiques."}))
            }
        }else{
            setMessage((prev) => ({...prev, password: "Votre mot de passe doit contenir au moins une lettre en majuscule, un chiffre et un des caractères spéciaux [!,@,#,$,%,^,&,*,(,),_,+]."}))
            return false
        }
    };

    function handlerChange (e){
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    function checkedFormOne(e){
        e.preventDefault()
        checkedEmail();
        checkedPseudo();
    }

    function handlerSubmit(event){
        event.preventDefault();
        if(isPasswordValid()){
            axios.post('http://localhost:8080/user/post', {
                name: user.name,
                pseudo: user.pseudo,
                email: user.email,
                password: user.password
            })
            .then((response) => {
                setCreate(response.data.done)
            })
            .catch((error) => console.log(error.response))
        }
    }

    if(create){
        return(
            <div>Verifier votre email pour finaliser la création de votre compte</div>
        )
    }else{

    return (
        <div className='container-signup'>
            <div className='div-left'>
                <img src={nuage} alt="signup-img-top-left" />
                {/* <img src={catch2} alt="signin-img-bottom-left" /> */}
            </div>
            <div className='div-middle'>
                {/* <img src={img} alt="logo-project" /> */}
                <div className='card-signup'>

                
                <section className='section-top'>
                    {(message.email || message.pseudo || message.password) && 
                    <div id='span-error'>
                        <span>{message.email}</span>
                        <span>{message.pseudo}</span>
                        <span>{message.password}</span>
                    </div>
                    }
                    <form className='signup-form' onSubmit={(e) =>checkedFormOne(e)}>
                        <Myinput
                            label="Email"
                            icon={MdMailOutline}
                            type="email"
                            name="email"
                            required={true}
                            handler={handlerChange}
                            style={(condition.email) ? {backgroundColor: "#F0F0F0"} : {backgroundColor: "transparent"}}
                            disable={(condition.email && condition.pseudo)?true:false}
                        />
                        <Myinput
                            label="Pseudo"
                            icon={VscSymbolNamespace}
                            type="text"
                            name="pseudo"
                            required={true}
                            handler={handlerChange}
                            style={(condition.email) ? {backgroundColor: "#F0F0F0"} : {backgroundColor: "transparent"}}
                            disable={(condition.email && condition.pseudo)?true:false}
                        />
                        {(condition.email === false || condition.pseudo===false) && <input type="submit" className='submit-signup' value="Verify identity"/>}
                    </form>
                    {(condition.email && condition.pseudo)&&
                        <form action="" onSubmit={(e) =>handlerSubmit(e)} className='signup-form form-email-pseudo'>
                            <button id="show-btn-edit" onClick={() => {setCondition((prev) => ({...prev, email: false, pseudo: false})); setMessage("")}}>
                                Reedit identify
                            </button>
                            <Myinput
                                label='Name'
                                icon={AiOutlineUser}
                                type="text"
                                name="name"
                                required={true}
                                handler={handlerChange}
                            />

                            <Myinput
                                label='Password'
                                icon={IoKeyOutline}
                                type="password"
                                name="password"
                                required={true}
                                handler={handlerChange}
                            />

                            <Myinput
                                label='Confirm password'
                                icon={IoKeyOutline}
                                type="password"
                                name="cpassword"
                                required={true}
                                handler={handlerChange}
                            />x 
                            <input type="submit" className='submit-signup' value="Creer compte"/>    
                        </form>
                    }
                </section>
                
                <span id="OR">OR</span>
                <section className='section-bottom'>
                    <div className='div-other-signup'>
                        <button className='btn-link-other-signin' id='google-btn'><FcGoogle className='icon-other-signin' /> <a href="#google">Sign up with Google</a></button>
                        {/* <button className='btn-link-other-signin' id='facebook-btn'><MdFacebook className='icon-other-signin' /> <a href="#fb">Sign up with Facebook</a></button> */}
                    </div>
                </section>
                </div>
            </div>
            <div className='div-right'>
                <img className='img-signup' src={nuage} alt="signup-img-top-right" />
            </div>
        </div>
    )}
}

export default Signup