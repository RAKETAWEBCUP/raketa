import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import Simulator from '../sections/simulator/Simulator'
import Blog from '../sections/blog/Blog'
import RatingOnirix from '../sections/rating/Rating.onirix'
import Onirix from '../pages/onirix/Onirix'
import Forum from '../components/Forum/Forum'

export default function OnirixRoute() {
    return (       
        <Routes path='/features' element={<Outlet />}>
            <Route path='/' element={<Onirix />}>
                <Route path='/simulator' element={<Simulator />}/>
                <Route path='/blog' element={<Forum />}/>
                <Route path='/rating' element={<RatingOnirix />}/>
            </Route>
        </Routes>
    )
}

