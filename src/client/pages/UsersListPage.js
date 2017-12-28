import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersListPage extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUserList() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		});
	}

	head() {
		return (
			<Helmet>
				<title>{`${this.props.users.length} Users Loaded`}</title>
				<meta property="og:title" content="Users App" />
			</Helmet>
		);
	}
	render() {
		console.log(this.props.users.length)
		return (
			<div>
				{this.head()}
				<ul>{this.renderUserList()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

// export  { loadData };

// export default connect(mapStateToProps, {fetchUsers})(UsersListPage);

export default {
	loadData,
	component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
