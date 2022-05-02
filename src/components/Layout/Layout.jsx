import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../Navigation/Navbar"

export function Layout() {
    return (
	<>
		<Navbar />
		<Outlet />
	</>
    )
}
