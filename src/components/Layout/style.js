import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  .content-div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    transition: 0.5s;
    .children {
      padding: ${({ screen }) =>
        screen === 'mobile' ? '20px 20px' : '59px 60px'};
      background: #fff;
      overflow: scroll;
      border-left: 0.3px solid #ccc;
      height: calc(100vh - 130px);
      overflow: scroll;
    }
  }
`;

export default Wrapper;
