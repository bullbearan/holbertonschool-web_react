import React, { Component } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;
		return (
			<React.Fragment>
				<div className={css(styles.all)}>
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(styles.Notifications)}>
						<button
							style={{
								position: "absolute",
								top: "10px",
								right: "15px",
								width: "20px",
								height: "20px",
								border: "none",
							}}
							aria-label="Close"
							onClick={() => {
								console.log("Close button has been clicked");
							}}>
							<img src={closeIcon} alt="close icon" className={css(styles.btnclose)}></img>
						</button>
						<p>Here is the list of notifications</p>
						<ul className={css(styles.nopadding)}>
							{listNotifications.length === 0 && (
								<NotificationItem value="No new notification for now" />
							)}

							{listNotifications.map((notification) => (
								<NotificationItem
									key={notification.id}
									type={notification.type}
									value={notification.value}
									html={notification.html}
									markAsRead={this.markAsRead}
								/>
							))}
						</ul>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
	nopadding: {
		padding: '0px',
	},

	Notifications: {
		position: "absolute",
		border: "2px dashed #e0374f",
		padding: "25px 15px",
		marginBottom: '16px',
		marginTop: '10px',
		width: '480px',
		right: '15px',
	},

	btnclose: {
		width: '20px',
		height: "20px",
	},

	noP: {
		textAlign: "right",
		paddingRight: "15px",
	},
});

export default Notifications;
