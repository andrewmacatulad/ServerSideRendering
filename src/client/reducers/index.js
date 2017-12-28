import { combineReducers } from 'redux';
import userReducer from './userReducers';
import adminsReducer from './adminsReducer';
import authReducer from './authReducer';

export default combineReducers({
	users: userReducer,
	auth: authReducer,
	admins: adminsReducer
})