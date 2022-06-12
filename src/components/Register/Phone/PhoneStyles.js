import { Input } from "@mui/material";
import styled from "styled-components";

export const SignInTitle = styled.h2`
  font-size: 22px;
  margin-top: 10px;
`;

export const SignInP = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 0 45px 20px;
`;

export const InputStyled = styled(Input)`
  width: 90%;
  color: var(--gray);
  font-size: 20px;
  padding: 0 10px;

  &.css-1up7ebe-MuiInputBase-root-MuiInput-root:before,
  &.css-1up7ebe-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before,
  &.css-1up7ebe-MuiInputBase-root-MuiInput-root:after {
    border-color: var(--yellow);
    color: var(--gray);
  }

  & > input {
    font-weight: 600;
    color: var(--gray);

    &::placeholder {
      color: var(--dark);
    }
  }
`;

export const SignInBottom = styled.div`
  padding: 30vh 5px 0 5px;
  width: 100%;
`;

export const SignInBottomP = styled.p`
  width: 150px;
  height: 32px;
  text-align: left;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: -0.408px;

  & > span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
