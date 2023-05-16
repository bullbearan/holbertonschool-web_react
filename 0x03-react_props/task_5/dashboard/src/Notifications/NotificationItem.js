import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ type, value, html }) {
	return (
		<>
			{value && <li data-notification-type={type}>{value}</li>}
			{!value && <li data-notification-type={type} dangerouslySetInnerHTML={html} />}
		</>
	);
}

NotificationItem.defaultProps = {
	type: "default",
	value: "",
	html: { __html: "" },
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
};
