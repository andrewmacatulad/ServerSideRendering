/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_users';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchCurrentUser = exports.fetchAdmins = exports.fetchUsers = undefined;

var _types = __webpack_require__(2);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsers = exports.fetchUsers = function fetchUsers() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return api.get('/users');

						case 2:
							res = _context.sent;

							dispatch({
								type: _types.FETCH_USERS,
								payload: res
							});

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return api.get('/admins');

						case 2:
							res = _context2.sent;

							dispatch({
								type: _types.FETCH_ADMINS,
								payload: res
							});

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x4, _x5, _x6) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
	return function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
			var res;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return api.get('/current_user');

						case 2:
							res = _context3.sent;


							dispatch({
								type: _types.FETCH_CURRENT_USER,
								payload: res
							});

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function (_x7, _x8, _x9) {
			return _ref3.apply(this, arguments);
		};
	}();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _UsersListPage = __webpack_require__(17);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _AdminListPage = __webpack_require__(18);

var _AdminListPage2 = _interopRequireDefault(_AdminListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = [_extends({}, _App2.default, {
	routes: [_extends({}, _HomePage2.default, {
		path: "/",
		exact: true
	}), _extends({}, _UsersListPage2.default, {
		path: "/users"
	}), _extends({}, _AdminListPage2.default, {
		path: "/admins"
	}), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com", {
	proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
		opts.headers["x-forwarded-host"] = "localhost:3000";
		return opts;
	}
}));

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
	var store = (0, _createStore2.default)(req);

	// Some logic to initialize
	// and load data into the store
	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	}).map(function (promise) {
		if (promise) {
			return new Promise(function (resolve, reject) {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _renderer2.default)(req, store, context);

		if (context.url) {
			return res.redirect(302, context.url);
		}

		if (context.notFound) {
			res.status(404);
		}
		res.send(content);
	});

	// Sample of Error Handling solution 1
	// .catch(() => {
	// 	res.send('Something went wrong');
	// })
	// Sample of Error Handling solution 2
	// const render = () => {
	// 	const context = {};
	// 	const content = renderer(req, store, context);

	// 	if(context.notFound) {
	// 		res.status(404);
	// 	}
	// 	res.send(content);
	// }

	// Promise.all(promises).then(render).catch(render);
});

app.listen("3000", function () {
	console.log("Listening on port 3000");
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
	return _react2.default.createElement(
		"div",
		{ className: "center-align", style: { marginTop: '200px' } },
		_react2.default.createElement(
			"h3",
			null,
			"Welcome"
		),
		_react2.default.createElement(
			"p",
			null,
			"Check out these awesome features"
		)
	);
};

exports.default = { component: HomePage };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
	var route = _ref.route;

	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(_Header2.default, null),
		(0, _reactRouterConfig.renderRoutes)(route.routes)
	);
};

// function loadData(store) {
// 	return store.dispatch(fetchCurrentUsers());
// }

exports.default = {
	component: App,
	loadData: function loadData(_ref2) {
		var dispatch = _ref2.dispatch;
		return dispatch((0, _actions.fetchCurrentUser)());
	}
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
	var auth = _ref.auth;

	console.log(auth);

	var authButton = auth ? _react2.default.createElement(
		'a',
		{ href: '/api/logout' },
		'Logout'
	) : _react2.default.createElement(
		'a',
		{ href: '/api/auth/google' },
		'Login'
	);
	return _react2.default.createElement(
		'nav',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'nav-wrapper' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/', className: 'brand-logo' },
				'SSR Things'
			),
			_react2.default.createElement(
				'ul',
				{ className: 'right' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/users' },
						'Users'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/admins' },
						'Admins'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					authButton
				)
			)
		)
	);
};

function mapStateToProps(_ref2) {
	var auth = _ref2.auth;

	return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
	var _ref$staticContext = _ref.staticContext,
	    staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

	staticContext.notFound = true;
	return _react2.default.createElement(
		'h1',
		null,
		'Page Not Found'
	);
};

exports.default = {
	component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var _reactHelmet = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersListPage = function (_Component) {
	_inherits(UsersListPage, _Component);

	function UsersListPage() {
		_classCallCheck(this, UsersListPage);

		return _possibleConstructorReturn(this, (UsersListPage.__proto__ || Object.getPrototypeOf(UsersListPage)).apply(this, arguments));
	}

	_createClass(UsersListPage, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.fetchUsers();
		}
	}, {
		key: "renderUserList",
		value: function renderUserList() {
			return this.props.users.map(function (user) {
				return _react2.default.createElement(
					"li",
					{ key: user.id },
					user.name
				);
			});
		}
	}, {
		key: "head",
		value: function head() {
			return _react2.default.createElement(
				_reactHelmet.Helmet,
				null,
				_react2.default.createElement(
					"title",
					null,
					this.props.users.length + " Users Loaded"
				),
				_react2.default.createElement("meta", { property: "og:title", content: "Users App" })
			);
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this.props.users.length);
			return _react2.default.createElement(
				"div",
				null,
				this.head(),
				_react2.default.createElement(
					"ul",
					null,
					this.renderUserList()
				)
			);
		}
	}]);

	return UsersListPage;
}(_react.Component);

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	return store.dispatch((0, _actions.fetchUsers)());
}

// export  { loadData };

// export default connect(mapStateToProps, {fetchUsers})(UsersListPage);

exports.default = {
	loadData: loadData,
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersListPage)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(4);

var _requireAuth = __webpack_require__(19);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminListPage = function (_Component) {
	_inherits(AdminListPage, _Component);

	function AdminListPage() {
		_classCallCheck(this, AdminListPage);

		return _possibleConstructorReturn(this, (AdminListPage.__proto__ || Object.getPrototypeOf(AdminListPage)).apply(this, arguments));
	}

	_createClass(AdminListPage, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.fetchAdmins();
		}
	}, {
		key: "renderAdminList",
		value: function renderAdminList() {
			return this.props.admins.map(function (admin) {
				return _react2.default.createElement(
					"li",
					{ key: admin.id },
					admin.name
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					null,
					"Protected List of Admins"
				),
				_react2.default.createElement(
					"ul",
					null,
					this.renderAdminList()
				)
			);
		}
	}]);

	return AdminListPage;
}(_react.Component);

function mapStateToProps(_ref) {
	var admins = _ref.admins;

	return { admins: admins };
}

exports.default = {
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminListPage)),
	loadData: function loadData(_ref2) {
		var dispatch = _ref2.dispatch;
		return dispatch((0, _actions.fetchAdmins)());
	}
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
	var RequireAuth = function (_Component) {
		_inherits(RequireAuth, _Component);

		function RequireAuth() {
			_classCallCheck(this, RequireAuth);

			return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
		}

		_createClass(RequireAuth, [{
			key: 'render',
			value: function render() {
				switch (this.props.auth) {
					case false:
						return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
					case null:
						return _react2.default.createElement(
							'div',
							null,
							'Loading....'
						);
					default:
						return _react2.default.createElement(ChildComponent, this.props);
				}
			}
		}]);

		return RequireAuth;
	}(_react.Component);

	function mapStateToProps(_ref) {
		var auth = _ref.auth;

		return { auth: auth };
	}
	return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(7);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: context },
			_react2.default.createElement(
				"div",
				null,
				(0, _reactRouterConfig.renderRoutes)(_Routes2.default)
			)
		)
	));
	// const content = renderToString(
	// 	<Provider store={store}>
	// 		<StaticRouter location={req.path} context={{}}>
	// 			<Routes />
	// 		</StaticRouter>
	// 	</Provider>
	// );

	var helmet = _reactHelmet.Helmet.renderStatic();

	return "\n\t\t<html>\n\t\t\t<head>\n\t\t\t" + helmet.title.toString() + "\n\t\t\t" + helmet.meta.toString() + "\n\t\t\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id=\"root\">" + content + "</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n\t\t\t\t</script>\n\t\t\t\t<script src=\"bundle.js\"></script>\n\t\t\t</body>\n\t\t</html>\n\t";
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
	var axiosInstance = _axios2.default.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || '' }
	});
	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

	return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(8);

var _userReducers = __webpack_require__(27);

var _userReducers2 = _interopRequireDefault(_userReducers);

var _adminsReducer = __webpack_require__(28);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

var _authReducer = __webpack_require__(29);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	users: _userReducers2.default,
	auth: _authReducer2.default,
	admins: _adminsReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _types = __webpack_require__(2);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_USERS:
			return action.payload.data;

		default:
			return state;
	}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _types = __webpack_require__(2);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_ADMINS:
			return action.payload.data;

		default:
			return state;
	}
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _types = __webpack_require__(2);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_CURRENT_USER:
			return action.payload.data || false;
		default:
			return state;
	}
};

/***/ })
/******/ ]);