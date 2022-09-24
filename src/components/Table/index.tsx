import React from "react";
import { Table as Tab } from "antd";

type Props = {
	columns: object[];
	data: object[];
	pagination?: any;
	title?: any;
	onClick?: any;
};

const Table = ({ columns, pagination, data, title, onClick }: Props) => {
	return (
		<Tab
			title={title}
			columns={columns}
			dataSource={data}
			pagination={pagination || false}
			onRow={(record, rowIndex) => {
				return {
					onClick: (event) => onClick(event), // click row
					onDoubleClick: (event) => {}, // double click row
					onContextMenu: (event) => {}, // right button click row
					onMouseEnter: (event) => {}, // mouse enter row
					onMouseLeave: (event) => {}, // mouse leave row
				};
			}}
		/>
	);
};

export default Table;
