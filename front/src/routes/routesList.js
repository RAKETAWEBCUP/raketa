import { createBrowserRouter, Route, createRoutesFromElements, Routes } from 'react-router-dom';
import { Home } from "../pages";
import { RootLayout } from '../layouts'
import { Routers } from './routesLists.js'
import SignIn from '../pages/signin/SignIn';
import Signup from '../pages/signup/Signup';
import OnirixRoute from './onirix.routes';

export const router = createBrowserRouter (
    createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}/>
      <Route index element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/features/*' element={<OnirixRoute />} />
      <Route path='/admin/*' element={<Routers />} />
    </>
    )
)