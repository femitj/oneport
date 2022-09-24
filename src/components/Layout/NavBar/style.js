import styled from 'styled-components';

const Wrapper = styled.div`
  height: 108px;
  background: #fff;
  padding-left: ${({ screen }) => (screen === 'mobile' ? '20px' : '60px')};
  padding-right: ${({ screen }) => (screen === 'mobile' ? '20px' : '60px')};
  display: flex;
  justify-content: ${({ screen }) =>
    screen === 'mobile' ? 'flex-end' : 'space-between'};
  align-items: center;
  border: 1px solid #e5e7eb;
  .title {
    display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'block')};
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
  }
  .input-style {
    border: none !important;
    width: auto;
    .icon-style {
      margin-right: 11px;
    }
  }
  .nav-right {
    display: flex;
    align-items: center;
    .notif {
      margin-right: ${({ screen }) => (screen === 'mobile' ? '8px' : '30px')};
    }
    .nav-dropdown {
      display: flex;
      align-items: center;
      .nav-d-image {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #000;
        margin-right: 7px;
        display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'block')};
      }
      .nav-text {
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        margin-right: 7px;
        display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'block')};
      }
    }
  }
`;

export default Wrapper;
