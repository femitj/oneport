import { Drawer, Form } from "antd";
import { AiOutlineFileAdd } from "react-icons/ai";
import Button from "../../Button";
import { SelectInput } from "../../Input";
import Wrapper from "./styles";

const Draw = ({ open, setOpen }: any) => {
	return (
		<Drawer
			width={720}
			onClose={() => {
				setOpen(false);
			}}
			open={open}
			bodyStyle={{ paddingBottom: 80 }}
		>
			<Form layout="vertical" hideRequiredMark>
				<Wrapper>
					<div className="d-col">
						<div className="title">Documents Upload</div>
						<div className="subtitle">
							Rhoncus dui convallis lorem egestas molestie vitae nibh.
						</div>

						<SelectInput
							label="Select Document type to upload"
							placeholder="Select document type"
						/>

						<div className="d-col card">
							<AiOutlineFileAdd color="#3AB44A" size={25} />
							<div>Click to upload a file or drag and drop</div>
							<div>PNG, JPG, , GIF upto 5MB</div>
						</div>
						<div className="d-flex">
							<Button className="card-btn">Upload</Button>
						</div>
					</div>
				</Wrapper>
			</Form>
		</Drawer>
	);
};

export default Draw;
