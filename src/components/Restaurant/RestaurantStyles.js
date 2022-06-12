import styled from "styled-components";

export const LogoRestaurant = styled.div`
  padding: 0 0 20px;

  & > img {
    width: 108px;
    height: 100%;
    filter: brightness(1.1);
    mix-blend-mode: multiply;
  }
`;

export const PlatesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  gap: 20px;
  margin: 20px 0;
`;

export const PlateCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
  border-radius: 10px;

  & > img {
    width: 154px;
    height: 110px;
    border-radius: 10px;
  }
`;
