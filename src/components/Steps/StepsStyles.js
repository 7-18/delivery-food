import styled from "styled-components";
import { Button, Steps } from "antd";

export const StepsContent = styled.div`
  min-height: 200px;
  padding-top: 100px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
`;

export const StepsAction = styled.div`
  margin: 0 15px;
`;

export const ButtonStyled = styled(Button)`
  text-align: center;
  background-color: var(--yellow);
  color: var(--dark);
  border-radius: 10px;
  width: 100%;
  font-weight: 600;

  &:focus {
    background-color: var(--yellow);
    color: var(--dark);
    border-color: var(--yellow);
    box-shadow: none;
    outline: none;
  }

  &:active {
    background-color: var(--yellow);
    color: var(--dark);
    border-color: var(--yellow);
    box-shadow: 0 0 0 2px var(--yellow);
  }

  &:hover {
    background-color: var(--yellow);
    color: var(--dark);
    border-color: var(--yellow);
    box-shadow: 0 0 0 2px var(--yellow);
  }
`;

export const StepsStyled = styled(Steps)`
  &.ant-steps {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & > div.ant-steps-item,
  div.ant-steps-item {
    display: inline-flex;
    flex: 0;
  }

  div.ant-steps-item-icon > span {
    display: none;
  }

  div.ant-steps-item-icon,
  div.ant-steps-item-process
    > div.ant-steps-item-container
    > div.ant-steps-item-icon {
    background-color: var(--yellow);
    border-color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  }

  div.ant-steps-item-process
    > div.ant-steps-item-container
    > div.ant-steps-item-icon {
    width: 27px;
    height: 10px;
    opacity: 1;
  }

  div.ant-steps-item-icon {
    opacity: 0.3;
    width: 9px;
    height: 10px;
  }

  & > div.ant-steps-item div.ant-steps-item-content {
    display: inline-flex;
    min-height: 15px;
  }

  &
    > div.ant-steps-item
    > div.ant-steps-item-container
    > div.ant-steps-item-tail {
    display: none;
    height: 0;
  }
`;
