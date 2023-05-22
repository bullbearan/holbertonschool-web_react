import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ type, value, html, markAsRead, id }) {
	return (
		<>
			{value && (
				<li data-notification-type={type} onClick={() => markAsRead(id)}>
					{value}
				</li>
			)}
			{!value && (
				<li
					data-notification-type={type}
					dangerouslySetInnerHTML={html}
					onClick={() => markAsRead(id)}
				/>
			)}
		</>
	);
}

NotificationItem.defaultProps = {
	type: "default",
	value: "",
	html: { __html: "" },
	markAsRead: () => {},
	id: NaN,
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	markAsRead: PropTypes.func,
	id: PropTypes.number,
};
