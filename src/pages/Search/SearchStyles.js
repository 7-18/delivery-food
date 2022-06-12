import styled from "styled-components";

export const GlobalInput = styled.input`
  border: 0.5px solid transparent;
  border-radius: 10px;
  padding: 10px 35px;
  width: 100%;
  background-color: var(--inputs);
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const IconGlobalInput = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin: 0 0 0 10px;
  top: 38%;
  transform: translateY(-50%);
  color: var(--gray);
  font-size: 18px;
`;
