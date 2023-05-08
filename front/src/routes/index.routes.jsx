import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/home/Home'
import SignIn from '../pages/signin/SignIn'
import Signup from '../pages/signup/Signup'
import  {ValidSignup}  from '../pages/signup/ValidSignup'
import OnirixRoute from './onirix.routes'
import {Router} from './routesList'
import { Routers } from './routesLists'
import { Dashboard } from '../pages'

function Index() {

    return (
        <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/token' element={<ValidSignup/>} >
                <Route path=':id' element={<ValidSignup/>} />
            </Route>
            <Route path='/features/*' element={<OnirixRoute />} />
            <Route path='/admin/*' element={<Router />} />
            <Route path='/dash/*' element={<Routers />} />
        </Routes>
    )
}

export default Index