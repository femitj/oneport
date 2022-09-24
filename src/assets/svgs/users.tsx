import React from "react";

function Users(props: any) {
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
				d="M15.6 7.2a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0zM21.6 9.6a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zM16.8 18a4.8 4.8 0 00-9.6 0v3.6h9.6V18zM7.2 9.6a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zM19.2 21.6V18a7.167 7.167 0 00-.9-3.487A3.6 3.6 0 0122.8 18v3.6h-3.6zM5.7 14.513A7.167 7.167 0 004.8 18v3.6H1.2V18a3.6 3.6 0 014.5-3.487z"
			></path>
		</svg>
	);
}

export default Users;
