import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { AppContext } from "../App/AppContext";

export default function Footer() {
	return (
		<AppContext.Consumer>
			{(context) => {
				return (
					<>
						<p>
							Copyright {getFullYear()} - {getFooterCopy()}
						</p>
						{context.user.isLoggedIn && <a href="#">Contact us</a>}
					</>
				);
			}}
		</AppContext.Consumer>
	);
}
