import React from "react";

function User(props: any) {
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
				fillRule="evenodd"
				d="M21.6 12a9.6 9.6 0 11-19.2 0 9.6 9.6 0 0119.2 0zm-7.2-3.6a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zM12 13.2a6 6 0 00-5.455 3.499 7.184 7.184 0 005.455 2.5c2.18 0 4.135-.969 5.455-2.5a6.001 6.001 0 00-5.455-3.5z"
				clipRule="evenodd"
			></path>
		</svg>
	);
}

export default User;
