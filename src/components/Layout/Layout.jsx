import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navigation/Navbar'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout