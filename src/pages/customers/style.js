import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  .d-flex {
    display: flex;
    align-items: center;
  }
  .ml-10 {
    margin-left: 10px;
  }
  .head-btn {
    margin-right: 10px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
  }
  .table-head {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  .select-btn {
    background: #f3f4f6;
    color: #374151;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border: 1px solid #d1d5db;
    margin-right: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;

export default Wrapper;
