import styled from "styled-components";
import { ButtonStyled } from "../../Steps/StepsStyles";

export const Plate = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 270px;
  border-radius: 0 0 10px 10px;
`;

export const ButtonAdd = styled(ButtonStyled)`
  background-color: var(--inputs);
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: transparent;
  margin: 0;

  &:focus {
    background-color: var(--inputs);
    color: var(--dark);
    border-color: var(--inputs);
    box-shadow: none;
    outline: none;
  }

  &:active {
    background-color: var(--inputs);
    color: var(--dark);
    border-color: var(--inputs);
    box-shadow: none;
  }

  & > span:active {
    box-shadow: 0 0 0 2px var(--inputs);
  }
`;

export const ButtonPrice = styled(ButtonStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: transparent;
  margin: 0;
`;
