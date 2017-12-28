import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import reducers from "./reducers";
import axios from 'axios';

import Home from "./pages/HomePage";
import Routes from "./Routes";

const axiosInstance = axios.create({
	baseURL: '/api'
})

const store = createStore(
	reducers,
	window.INITIAL_STATE,
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);

// ReactDOM.hydrate(
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<Routes />
// 		</BrowserRouter>
// 	</Provider>,
// 	document.querySelector("#root")
// );
