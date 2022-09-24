import Wrapper from "./style";
import SideBar from "./sideBar";
import NavBar from "./NavBar";
import useDimension from "../../hooks/useDimension";

const Layout = ({ children, title }: any) => {
	const type = useDimension();

	console.log(type);

	return (
		<Wrapper screen={type}>
			<SideBar screen={type} />
			<div className="content-div">
				<NavBar screen={type} title={title} />
				<div className="children">{children}</div>
			</div>
		</Wrapper>
	);
};

export default Layout;
