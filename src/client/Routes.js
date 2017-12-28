import React from "react";
import HomePage from "./pages/HomePage";
import App from './App'

import NotFoundPage from './pages/NotFoundPage'
import UsersListPage from "./pages/UsersListPage";
import AdminListPage from "./pages/AdminListPage";



// export default () => {
// 	return(
// 		<div>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/users" component={UsersList} />
// 			<Route component={() => "Fuck"} />
// 		</div>
// 	)
// }

// export default [
// 	{
// 		...HomePage,
// 		path: "/",
// 		exact: true
// 	},
// 	{
// 		...UsersListPage,
// 		path: "/users"
// 	}
// ];

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: "/",
				exact: true
			},
			{
				...UsersListPage,
				path: "/users"
			},
			{
				...AdminListPage,
				path: "/admins"
			},
			{
				...NotFoundPage
			}
		]
	}
];
