import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Loading } from "./components/Loading/Loading"
import { Error } from "./pages/Error"
import { Starting } from "./pages/Starting"
import { User } from "./pages/User"

export function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Starting />} />
					<Route path="user/:id" element={<User />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</Suspense>
	)
}
