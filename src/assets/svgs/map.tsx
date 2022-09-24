import React from "react";

function Map(props: any) {
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
				d="M14.4 1.903l-4.8 4.8v15.394l4.8-4.8V1.903zM4.449 3.952A1.2 1.2 0 002.4 4.8v12c0 .318.126.624.352.849L7.2 22.097V6.703L4.449 3.952zM21.249 6.352L16.8 1.903v15.394l2.752 2.752A1.2 1.2 0 0021.6 19.2v-12a1.2 1.2 0 00-.351-.848z"
				clipRule="evenodd"
			></path>
		</svg>
	);
}

export default Map;
