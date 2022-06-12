import { Input, InputLabel } from "@mui/material";
import styled from "styled-components";

export const DivCreateAccount = styled.div`
  padding: 30px 20px 0;
`;

export const H2CreateAccount = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 10px 0 50px;
`;

export const InputLabelCreateAccount = styled(InputLabel)`
  &.Mui-focused {
    color: var(--gray) !important;
  }
`;

export const InputCreateAccount = styled(Input)`
  &.css-1ptx2yq-MuiInputBase-root-MuiInput-root,
  &.css-1ptx2yq-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before,
  &.css-1ptx2yq-MuiInputBase-root-MuiInput-root:after {
    border-color: var(--gray);
  }
`;
