import React from "react";

function Quotes(props: any) {
	const { color } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill={color || "#6B7280"}
				d="M10.8 2.4a2.4 2.4 0 00-2.4 2.4v9.6a2.4 2.4 0 002.4 2.4H18a2.4 2.4 0 002.4-2.4V7.697A2.4 2.4 0 0019.697 6L16.8 3.103a2.4 2.4 0 00-1.697-.703H10.8z"
			></path>
			<path
				fill={color || "#6B7280"}
				d="M3.6 9.6A2.4 2.4 0 016 7.2v12h9.6a2.4 2.4 0 01-2.4 2.4H6a2.4 2.4 0 01-2.4-2.4V9.6z"
			></path>
		</svg>
	);
}

export default Quotes;
