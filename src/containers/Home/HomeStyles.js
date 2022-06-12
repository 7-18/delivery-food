import styled from "styled-components";

export const HomeDiv = styled.div`
  padding: 0 0 0 20px;
  width: 100%;
`;

//deliver to
export const Deliver = styled.div`
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 20px 200px;
  grid-gap: 1rem;

  & > div.icon {
    font-size: 2rem;
    color: var(--yellow);
  }

  & > div.delivery {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > span {
      font-weight: 600;
    }
  }

  & > div.delivery > span.deliver {
    color: var(--yellow);
    font-size: 12px;
    line-height: 1;
  }
`;