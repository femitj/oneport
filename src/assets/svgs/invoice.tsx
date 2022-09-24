import React from "react";

const Invoice = (props: any) => {
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
				d="M7.2 2.4a2.4 2.4 0 00-2.4 2.4v14.4a2.4 2.4 0 002.4 2.4h9.6a2.4 2.4 0 002.4-2.4V8.897a2.4 2.4 0 00-.703-1.697L14.4 3.103a2.4 2.4 0 00-1.697-.703H7.2zM8.4 12a1.2 1.2 0 000 2.4h7.2a1.2 1.2 0 100-2.4H8.4z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default Invoice;
