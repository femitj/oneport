import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import Route from "../../assets/svgs/route";
import Button, { BackBtn } from "../../components/Button";
import Layout from "../../components/Layout";
import Draw from "../../components/Layout/Drawer";
import NavTab from "../../components/navTab";
import { DetailWrapper } from "./style";

type Props = {};

const Details = (props: Props) => {
	const [display, setDisplay] = useState("Documents");
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<Layout title="Shipments">
			<DetailWrapper>
				<div className="head spb">
					<div className="d-flex">
						<BackBtn />
						Shipment Details
					</div>
					<div className="d-flex">
						<Button className="headBtn" background="#fff">
							Invoice
						</Button>
						<Button className="headBtn" background="#fff">
							Track/Update Shipment
						</Button>
					</div>
				</div>
				<div className="d-col">
					<div className="card-top d-flex spb">
						<div className="d-flex">
							<BsArrowUpRightCircleFill
								size={34}
								color="#fff"
								className="card-icon"
							/>
							<div>export</div>
						</div>
						<div>Apr 02, 2022</div>
						<div className="d-col t-right">
							<div className="s-title">489395758</div>
							<div>489395758</div>
						</div>
					</div>
					<div className="card-bottom d-flex">
						<div className="d-col card-icon-2">
							<div className="cb-title">Port of Discharge</div>
							<div className="cb-Origin">NGAPP</div>
							<div className="cb-loc">Lagos, Nigeria</div>
						</div>
						<div className="card-icon-2">
							<Route />
						</div>
						<div className="d-col ">
							<div className="cb-title">Delievery location</div>
							<div className="cb-Origin">Arlington</div>
							<div className="cb-loc">VA, USA</div>
						</div>
					</div>
					<div>
						<NavTab
							display={display}
							options={[
								"Documents",
								"Cargo Details",
								"Additional Services",
								"Rates",
							]}
							handleChange={(val: any) => setDisplay(val)}
						/>
					</div>
					<div className="d-col">
						<div className="d-flex spb mb-20">
							<div>Uploaded Documents</div>
							<div className="d-flex ">
								<Button background="#fff" className="headBtnx card-icon">
									Request Document
								</Button>
								<Button onClick={() => setShowDrawer(true)}>
									Upload Document
								</Button>
							</div>
						</div>
						<div className="card d-flex spb">
							<div>
								<div className="cb-title">NXP-FORM</div>
								<div className="cb-title">NXP_FORM.pdf</div>
								<div className="cb-loc">uploaded by you</div>
							</div>
							<div>
								<RiDeleteBin5Line color="red" />
							</div>
						</div>
					</div>
				</div>
			</DetailWrapper>
			{showDrawer && <Draw open={showDrawer} setOpen={setShowDrawer} />}
		</Layout>
	);
};

export default Details;
