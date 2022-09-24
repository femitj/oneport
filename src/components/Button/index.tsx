import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";

type Props = {
	onClick?: () => void;
	className?: any;
	children?: any;
	[x: string]: any;
};

const Button = (props: Props) => {
	const { onClick, children, className } = props;
	return (
		<Wrapper className={className} {...props} onClick={onClick}>
			{children}
		</Wrapper>
	);
};

export default Button;

export const BackBtn = ({ action }: any) => {
	const navigate = useNavigate();
	return (
		<IoIosArrowRoundBack
			size={39}
			color="#111827"
			onClick={() => (action ? action() : navigate(-1))}
		/>
	);
};
