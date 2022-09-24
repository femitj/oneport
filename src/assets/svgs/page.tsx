import React from "react";

const Page = (props: any) => {
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
				d="M4.8 4.8a2.4 2.4 0 012.4-2.4h5.503a2.4 2.4 0 011.697.703L18.497 7.2a2.4 2.4 0 01.703 1.697V19.2a2.4 2.4 0 01-2.4 2.4H7.2a2.4 2.4 0 01-2.4-2.4V4.8zM7.2 12a1.2 1.2 0 011.2-1.2h7.2a1.2 1.2 0 110 2.4H8.4A1.2 1.2 0 017.2 12zm1.2 3.6a1.2 1.2 0 000 2.4h7.2a1.2 1.2 0 100-2.4H8.4z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default Page;
