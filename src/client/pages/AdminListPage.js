import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from '../components/hocs/requireAuth';

class AdminListPage extends Component {
	componentDidMount() {
		this.props.fetchAdmins();
	}
	renderAdminList() {
		return this.props.admins.map(admin => {
			return <li key={admin.id}>{admin.name}</li>;
		});
	}
	render() {
		return (
			<div>
				<h3>Protected List of Admins</h3>
				<ul>{this.renderAdminList()}</ul>
			</div>
		);
	}
}

function mapStateToProps({ admins }) {
	return { admins };
}

export default {
	component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
	loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
