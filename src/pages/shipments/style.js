import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  .back {
  }
  .card-cont {
    display: flex;
    width: 50%;
    margin-bottom: 42px;
    .card {
      width: 100%;
      padding: 31px 21px;
      background: #f9fafb;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      display: flex;
      align-items: center;

      .img {
        width: 83px;
        height: 83px;
        background: #000;
        border-radius: 50%;
        margin-right: 22px;
      }
      .det {
        display: flex;
        flex-direction: column;
        .name {
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
        }
        .email {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
      }
      .btn {
        height: 44px;
        margin-left: auto;
      }
    }
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
    margin-right: 10px;
  }
  .input {
    margin-left: auto;
  }
  .searchIcon {
    margin-right: 11px;
  }
`;

export default Wrapper;

export const DetailWrapper = styled.div`
  width: 70%;
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
  .head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .headBtn {
      border: 1px solid #6b7280;
      color: #374151;
      font-weight: 700;
      font-size: 16px;
      line-height: 19.36px;
      margin-left: 10px;
    }
  }
  .card-top {
    background: #3ab44a;
    border-radius: 14px 14px 0px 0px;
    padding: 33px 40px;
    display: flex;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 38px;
  }
  .card-bottom {
    background: #f0fdf4;
    border-radius: 0px 0px 14px 14px;
    padding: 33.5px 40px;
  }
  .card-icon {
    margin-right: 13px;
  }
  .card-icon-2 {
    margin-right: 25px;
  }
  .s-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.7;
  }
  .t-right {
    text-align: right;
  }
  .cb-title {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
  }
  .cb-Origin {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  .cb-loc {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
  .headBtnx {
    border: 1px solid #6b7280;
    color: #374151;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
    margin-left: 10px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .card {
    border: 1px solid #d1d5db;
    border-radius: 19px;
    padding: 31px 21px;
    .cb-title {
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
    }
    .cb-loc {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
