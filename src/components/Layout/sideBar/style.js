import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ screen }) => (screen === 'mobile' ? '80px' : '256px')};
  height: 100vh;
  overflow-y: scroll;
  overflow-x: visible;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: ${({ screen }) =>
    screen === 'mobile' ? 'center' : 'flex-start'};
  padding-top: 21px;
  padding-left: ${({ screen }) => (screen === 'mobile' ? '20px' : '40px')};
  padding-right: ${({ screen }) => (screen === 'mobile' ? '20px' : '40px')};
  transition: 0.5s;
  .logo-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 59px;
    height: 109px;
    .logo-img {
      display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'flex')};
      width: 169.92px;
      height: 61px;
    }
  }
  .sidebar-list {
    display: flex;
    flex-direction: column;
    align-items: ${({ screen }) =>
      screen === 'mobile' ? 'center' : 'flex-start'};
    height: 100vh;
    overflow-x: visible;
    .item {
      flex-direction: row;
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      &:hover {
        background: #a1f5ac;
      }
      .item-icon-active {
        background: #3ab44a;
      }
      .item-icon {
        margin-right: ${({ screen }) => (screen === 'mobile' ? '0' : '24px')};
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 10px;
        border-radius: 8px;
      }
      .item-text {
        display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'block')};
        font-size: 14px;
        font-weight: 600;
        line-height: 28px;
        color: #6b7280;
      }
      .item-text-active {
        display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'block')};
        font-size: 14px;
        font-weight: 600;
        line-height: 28px;
        color: #000;
      }
    }
  }
`;

export default Wrapper;
