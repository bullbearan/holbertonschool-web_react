import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
	return (
		<div className="Notifications">
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
				<img src={closeIcon} alt="close icon" className="btn-close"></img>
			</button>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type="default" value="New course available" />
				<NotificationItem type="urgent" value="New resume available" />
				<NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
			</ul>
		</div>
	);
};

export default Notifications;
