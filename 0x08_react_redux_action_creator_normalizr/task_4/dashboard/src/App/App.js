import React, { Component } from "react";
import Notifications from "../Notifications/Notifications.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList.js";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import { user, logOut, AppContext } from "./AppContext";

const listCourses = [
	{ id: 1, name: "ES6", credit: 60 },
	{ id: 2, name: "Webpack", credit: 20 },
	{ id: 3, name: "React", credit: 40 },
];

const listNotificationsInitialState = [
	{ id: 1, type: "default", value: "New course available" },
	{ id: 2, type: "urgent", value: "New resume available" },
	{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleCtrlH = this.handleCtrlH.bind(this);
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
		this.state = {
			displayDrawer: false,
			user,
			logOut: this.logOut,
			listNotifications: listNotificationsInitialState,
		};
	}

	handleCtrlH(e) {
		if (e.key === "h" && e.ctrlKey) {
			alert("Logging you out");
			this.props.logOut();
		}
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	logIn(email, password) {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true,
			},
		});
	}

	logOut() {
		this.setState({ user });
	}

	markNotificationAsRead(id) {
		this.setState({
			listNotifications: this.state.listNotifications.filter((notification) => {
				return notification.id !== id;
			}),
		});
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleCtrlH);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleCtrlH);
	}

	render() {
		const {
			user,
			user: { isLoggedIn },
			logOut,
			displayDrawer,
			listNotifications,
		} = this.state;

		return (
			<AppContext.Provider value={{ user, logOut }}>
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
					markNotificationAsRead={this.markNotificationAsRead}
				/>
				<div className={css(styles.all)}>
					<Header />
				</div>
				<div className={css(styles.bodynow)}>
					{isLoggedIn ? (
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
					) : (
						<BodySectionWithMarginBottom title="Log in to continue">
							<Login logIn={this.logIn} />
						</BodySectionWithMarginBottom>
					)}
				</div>
				<BodySection title="News from the School">
					<p>random text</p>
				</BodySection>
				<div className={css(styles.all, styles.footer)}>
					<Footer />
				</div>
			</AppContext.Provider>
		);
	}
}

App.defaultProps = {};

App.propTypes = {};

const styles = StyleSheet.create({
	all: {
		padding: "0px",
		margin: "0px",
		boxSizing: "border-box",
	},

	bodynow: {
		fontSize: "20px",
		height: "60vh",
		paddingTop: "80px",
		paddingLeft: "45px",
		"@media (max-width: 900px)": {
			height: "auto",
			paddingLeft: "0",
		},
	},

	footer: {
		fontSize: "20px",
		textAlign: "center",
		fontStlye: "italic",
		padding: "20px",
		borderTop: "4px solid #e0374f",
	},
});
