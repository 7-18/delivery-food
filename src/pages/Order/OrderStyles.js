import styled from "styled-components";

export const OrdersDiv = styled.div`
  width: 100%;

  & > h3 {
    text-align: center;
    font-weight: 400;
  }
`;

export const ThisOrderDiv = styled.div`
  display: flex;
  padding: 10px 0;
  transition: 0.3s;
  gap: 20px;

  &:hover {
    background-color: var(--inputs);
  }

  & > div.col-2 {
    width: 100%;
    padding: 0 10px;

    & > span {
      color: var(--gray);
    }
  }
`;

export const OrderName = styled.h4`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;

  & > small {
    display: flex;
    align-items: center;

    &.delivered {
      color: #77df52;
    }

    &.cancelled {
      color: #df5252;
    }

    & > svg {
      color: var(--dark);
      margin-left: 10px;
    }
  }
`;
