import { createBrowserRouter, Route, createRoutesFromElements, Routes, Outlet } from 'react-router-dom';
import { Dashboard, Bar, Contacts, FAQ, Form, Geography, Invoices, Line, Pie, Team, Calendar } from "../pages";
import { RootLayout, RootLayouts } from '../layouts'


export const Routers = () => {
      return (
      <Routes path='/admin' element={<Outlet />}>
        <Route path='/' element={<RootLayouts />} >
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/pie' element={<Pie />} />
          <Route path='/team' element={<Team />} />
        </Route>
      </Routes>
      )
    
}