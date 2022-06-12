import styled from "styled-components";

export const BannersDiv = styled.div`
  scroll-snap-type: x mandatory;
  overflow: auto;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BannersItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;

  & > img {
    width: 259px;
    height: 100px;
    margin-right: 15px;
    border-radius: 15px;

    & > img:last-child {
      margin-right: 0;
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
`;

export const Dot = styled.button`
  all: unset;
  margin-right: 5px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: var(--gray);
  margin-top: 15px;
`;
