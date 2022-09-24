import styled from "styled-components";

const Wrapper = styled.div`
	.site-form-in-drawer-wrapper {
		position: absolute;
		right: 0px;
		bottom: 0px;
		width: 100%;
		padding: 10px 16px;
		text-align: right;
		background: #fff;
		border-top: 1px solid #e9e9e9;
	}
	.spb {
		justify-content: space-between;
	}
	.d-flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.d-col {
		display: flex;
		flex-direction: column;
	}
	.title {
		font-weight: 600;
		font-size: 24px;
		line-height: 32px;
		margin-bottom: 9px;
		color: #000000;
	}
	.subtitle {
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: #6b7280;
		margin-bottom: 54px;
	}
	.card {
		background: #fafffb;
		padding: 19px;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		margin-top: 25px;
		justify-content: center;
		align-items: center;
	}
	.card-btn {
		margin-left: auto;
		margin-top: 20px;
	}
`;

export default Wrapper;
