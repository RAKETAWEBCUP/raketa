import React from 'react'
import axios from 'axios'
import {setCurrentUser} from '../../features/currentUser.slice'
import { MdFacebook } from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {IoKeyOutline } from 'react-icons/io5'
import {FcGoogle} from 'react-icons/fc'
import { useDispatch } from 'react-redux'

import './signin.css'
import nuage from '../../asset/img/nuage.png'
import catch1 from '../../asset/img/dreamCatch3.png'
import catch2 from '../../asset/img/dreamCatch2.png'
import img from '../../asset/img/logoR.png'
import Right from '../../asset/img/signin.svg'
import { Myinput } from '../../components/inputs/MyInput'

function SignIn() {

    const dispatch = useDispatch()
    const [user, setUser] = React.useState({
        pseudo_email: "",
        passwordY: ""
    })
    const [message, setMessage] = React.useState("")

    function handlerChange (e){
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    function handlerForm(event){
        event.preventDefault()
        // axios.post('http://localhost:8080/user/login', {
        //     pseudo_email: user.pseudo_email,
        //     password: user.password
        // }).then((result) => {
        //     try {
        //         dispatch(setCurrentUser(result.data.user, "auth"))
        //         .then(() => window.location = "/")
        //     } catch (error) {
        //         console.log(error)
        //     }
                     
        // }).catch((error) => {
        //     if (error.response.status === 401) {
        //         setMessage(error.response.data.message)
        //     }
        // })

        if(user.pseudo_email === 'Milofo' && user.passwordY === 'Milofo'){
            window.location.href = '/features/simulator'
        }
    }

    return (
        <div className='container-signin'>
            <div className='div-left'>
                <img src={nuage} alt="signin-img-top-left" />
                {/* <img src={catch2} alt="signin-img-bottom-left" /> */}
            </div>
            <div className='div-middle'>
                <h2 className='text-3xl my-6'>Onirix</h2>
                {/* <img src={img} alt="logo-project" /> */}
                {/* <div className='card-login'> */}
                    <section className='section-top'>
                        {(message) && 
                            <div id='span-error'>
                                <span>{message}</span>
                            </div>
                        }
                        <form action="" className='login-form' onSubmit={(event) => handlerForm(event)}>
                            <Myinput
                                label='Email or pseudo'
                                icon={AiOutlineUser}
                                type="text"
                                name="pseudo_email"
                                required={true}
                                handler={handlerChange}
                            />
                            <Myinput
                                label="Password"
                                icon={IoKeyOutline}
                                type="password"
                                name="passwordY"
                                required={false}
                                handler={handlerChange}
                            />
                            <a href="#recovery">recovery password</a><br />
                            <input type="submit" value="Sign In" className='submit-signin' />
                        </form>
                    </section>

                    <span id="OR">OR</span>
                    <section className='section-bottom'>
                        <p>Don't have account ? <a href="#signup"> Sign up</a> </p>
                        <div className='div-other-signin'>
                            <button className='btn-link-other-signin' id='google-btn'><FcGoogle className='icon-other-signin' /> <a href="#google">Sign in with Google</a></button>
                            {/* <button className='btn-link-other-signin' id='facebook-btn'><MdFacebook className='icon-other-signin' /> <a href="#fb">Sign in with Facebook</a></button> */}
                        </div>
                    </section>
                {/* </div> */}
            </div>
            <div className='div-right'>
                <img src={nuage} alt="signin-img-top-right" />
                {/* <img src={catch1} alt="signin-img-bottom-right" /> */}

                {/* <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex qui aliquid.</h1>
                <img src={Right} alt="bg-img" /> */}
            </div>
        </div>
    )
}

export default SignIn