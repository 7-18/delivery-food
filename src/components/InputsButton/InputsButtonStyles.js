import styled from "styled-components";

export const GlobalButton = styled.button`
  border: 0.5px solid transparent;
  border-radius: 10px;
  padding: 12px 5px;
  width: 100%;
  background-color: var(--inputs);
  margin-top: 10px;
  gap: 10px;
  text-align: left;
`;

export const GlobalInput = styled.input`
  border: 0.5px solid transparent;
  border-radius: 10px;
  padding: 12px;
  width: 100%;
  background-color: var(--inputs);
  margin-top: 10px;
  gap: 10px;
  text-align: left;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--gray);
  }
`;

export const GlobalButtonName = styled.span`
  width: 100%;
  margin-bottom: 0;
  align-items: center;

  & > span.title-edit {
    text-align: left;
    margin-left: 10px;
  }

  & > svg,
  & > span.css-julti5-MuiSwitch-root {
    margin-left: 10px;
    margin-right: 5px;

    &:last-child {
      float: right;
      font-size: 18px;
    }
  }

  & > span {
    float: right;
  }

  &
    > span
    > span.Mui-checked {
    color: var(--yellow);
  }

  &
    > span
    > span.Mui-checked.MuiSwitch-track {
    background-color: var(--dark);
  }
`;
