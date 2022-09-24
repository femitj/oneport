import React from "react";
import { Wrapper } from "./styles";

const NavTab = ({ display, options, handleChange, render }: any) => {
	return (
		<Wrapper>
			<div className="d-flex rb-container">
				{options?.map((item: any, index: any) =>
					render ? (
						render
					) : (
						<div
							key={index}
							onClick={() => handleChange(item)}
							className={display === item ? "bar-item-active" : "bar-item"}
						>
							{item}
						</div>
					)
				)}
			</div>
			<div className="d-flex grow">.</div>
		</Wrapper>
	);
};

export default NavTab;
