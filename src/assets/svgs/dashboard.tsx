import React from "react";

const Dashboard = (props: any) => {
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
				d="M6 3.6A2.4 2.4 0 003.6 6v2.4A2.4 2.4 0 006 10.8h2.4a2.4 2.4 0 002.4-2.4V6a2.4 2.4 0 00-2.4-2.4H6zM6 13.2a2.4 2.4 0 00-2.4 2.4V18A2.4 2.4 0 006 20.4h2.4a2.4 2.4 0 002.4-2.4v-2.4a2.4 2.4 0 00-2.4-2.4H6zM13.2 6a2.4 2.4 0 012.4-2.4H18A2.4 2.4 0 0120.4 6v2.4a2.4 2.4 0 01-2.4 2.4h-2.4a2.4 2.4 0 01-2.4-2.4V6zM13.2 15.6a2.4 2.4 0 012.4-2.4H18a2.4 2.4 0 012.4 2.4V18a2.4 2.4 0 01-2.4 2.4h-2.4a2.4 2.4 0 01-2.4-2.4v-2.4z"
			></path>
		</svg>
	);
};

export default Dashboard;
