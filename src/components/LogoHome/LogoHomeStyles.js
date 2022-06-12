import syled from "styled-components";

export const LogoDiv = syled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--yellow);
  `;

export const Logo = syled.img`
  background-color: var(--inputs);
  border-radius: 10px;
  padding: 10px;
  `;
