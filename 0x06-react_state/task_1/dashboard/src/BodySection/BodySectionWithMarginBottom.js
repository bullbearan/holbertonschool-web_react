import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

export default class BodySectionWithMarginBottom extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css(styles.bodySectionWithMargin)}>
				<BodySection {...this.props} />
			</div>
		);
	}
}

BodySectionWithMarginBottom.defaultProps = {
	title: "",
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
};

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: "40px",
	},
});
