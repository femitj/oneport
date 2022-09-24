import { useEffect, useState } from "react";

const useDimension = () => {
	const [screen, setScreen] = useState({
		windowWidth: window.innerWidth,
		type: "pc",
	});

	const resizeHandler = () => {
		const currentWindowWidth = window.innerWidth;
		if (currentWindowWidth > 1200) {
			setScreen({
				windowWidth: currentWindowWidth,
				type: "pc",
			});
		} else {
			setScreen({
				windowWidth: currentWindowWidth,
				type: "mobile",
			});
		}
	};

	useEffect(() => {
		resizeHandler();
		window.addEventListener("resize", resizeHandler);
	}, [screen?.windowWidth]);

	return screen.type;
};
export default useDimension;
