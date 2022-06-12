import styled from "styled-components";

export const CardRestaurantStyled = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  & > div > img {
    border-radius: 10px;
    clip-path: polygon(0 0, 105% 0, 0 300%);
    width: 134px;
    height: 108.02px;
  }

  & > div.col-2 {
    display: flex;
    flex-direction: column;

    & > h3 {
      margin-bottom: -5px;
    }

    & > span {
      font-size: 16px;
      margin-top: 5px;
      font-weight: 400;
    }

    & > small {
      color: var(--gray);

      & > b {
        color: var(--dark);
      }
    }
  }
`;

export const MiniDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > small {
    color: var(--gray);
    background-color: var(--inputs);
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0 5px;
  }
`;
