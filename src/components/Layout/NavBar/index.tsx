import React from "react";
import Wrapper from "./style";
import { BiChevronDown } from "react-icons/bi";
import NotifBell from "../../../assets/svgs/notifBell";

interface Props {
	screen: String;
	title: String;
}

const NavBar = ({ screen, title }: Props) => {
	return (
		<Wrapper screen={screen}>
			<div className="title">{title}</div>
			<div className="nav-right">
				<div className="notif">
					<NotifBell />
				</div>
				<div className="nav-dropdown">
					<div className="nav-d-image" />
					<div>Temoc</div>
					<BiChevronDown width={10} height={5} />
				</div>
			</div>
		</Wrapper>
	);
};

export default NavBar;
