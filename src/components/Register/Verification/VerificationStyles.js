import { Input } from "antd";
import styled from "styled-components";

export const InputVerification = styled.input`
  caret-color: transparent !important;
  border: none;
  border-color: transparent;
  outline: none;
  width: 7ch;
  background: repeating-linear-gradient(
      90deg,
      black 0,
      black 1.3ch,
      transparent 0,
      transparent 1.8ch
    )
    0 100%/100% 2px no-repeat;
  font: 5ch consolas, monospace;
  letter-spacing: 0.76ch;

  &.ant-input:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }

  &.ant-input:hover {
    border: none;
  }
`;

export const SpanVerify = styled.span`
  font-weight: bold;
`;
