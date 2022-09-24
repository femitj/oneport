import React from "react";

const Route = (props: any) => {
	const { color } = props;
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="139"
			height="20"
			fill="none"
			viewBox="0 0 139 20"
		>
			<circle
				cx="10"
				cy="10"
				r="9"
				stroke={color || "#3AB44A"}
				strokeWidth="2"
			></circle>
			<path fill={color || "#3AB44A"} d="M20 9H119V11H20z"></path>
			<circle
				cx="129"
				cy="10"
				r="9"
				stroke={color || "#3AB44A"}
				strokeWidth="2"
			></circle>
		</svg>
	);
};

export default Route;
