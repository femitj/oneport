import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 6px;
  color: ${(props) => props.color || `#fff`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || `10px 24px`};
  background: ${(props) => props.background || `#3ab44a`};
  border: ${(props) =>
    `${props.borderWidth || 1}px solid ${props.outline} !important ` ||
    `0 !important`};
`;

export default Wrapper;
