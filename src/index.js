import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { App } from "./App"
import { store, persistor } from "./store/store"

import { Loading } from "./components/Loading/Loading"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Provider store={store}>
		<PersistGate loading={<Loading />} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
)
