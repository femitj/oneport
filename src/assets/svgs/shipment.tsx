import React from "react";

function Shipment(props: any) {
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
				d="M9.6 19.8a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0zM18 19.8a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0z"
			></path>
			<path
				fill={color || "#6B7280"}
				d="M3.6 4.8A1.2 1.2 0 002.4 6v12a1.2 1.2 0 001.2 1.2h1.26a3.001 3.001 0 015.88 0H12a1.2 1.2 0 001.2-1.2V6A1.2 1.2 0 0012 4.8H3.6zM16.8 8.4a1.2 1.2 0 00-1.2 1.2v7.26a3.001 3.001 0 013.54 2.34h1.26a1.2 1.2 0 001.2-1.2v-6a1.2 1.2 0 00-.351-.848l-2.4-2.4A1.2 1.2 0 0018 8.4h-1.2z"
			></path>
		</svg>
	);
}

export default Shipment;
