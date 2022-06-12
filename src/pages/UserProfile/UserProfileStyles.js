import styled from 'styled-components';

export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    border-radius: 100%;
    width: 64px;
    height: 100%;
  }
`;
