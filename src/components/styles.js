import styled from "styled-components";
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-top: 17px;
	padding-bottom: 16px;
	.grow {
		flex-grow: 1;
		border-bottom: 1px solid #d1d5db;
		padding: 11px 25px;
		color: transparent;
	}
	.back-cont {
		border-bottom: 3px solid #e8e7ea;
		padding-top: 17px;
		padding-bottom: 16px;
		padding-right: 92px;
	}
	.rb-container {
		.bar-item-active {
			font-size: 16px;
			line-height: 24px;
			font-weight: 600;

			border-bottom: 3px solid #3ab44a;
			justify-content: center;
			padding: 11px 25px;
			left: 0;
			align-items: center;
		}
		.bar-item {
			font-size: 16px;
			line-height: 24px;
			font-weight: 600;

			justify-content: center;
			bottom: -1px;
			padding: 11px 25px;
			left: 0;
			align-items: center;
			border-bottom: 1px solid #d1d5db;
			cursor: pointer;
		}
	}
	.d-flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;
