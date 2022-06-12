import styled from "styled-components";

import hamburger from "../../assets/images/hamburger.png";
import pizza from "../../assets/images/pizza.png";
import sushi from "../../assets/images/hot-pot.png";
import coffee from "../../assets/images/coffee-cup.png";
import cake from "../../assets/images/cake.png";
import salad from "../../assets/images/salad.png";
import fried_chicken from "../../assets/images/fried-chicken.png";
import mastercard from "../../assets/images/mastercard.png";
import paypal from "../../assets/images/paypal.png";
import visa from "../../assets/images/visa.png";
import american_express from "../../assets/images/american-express.png";

export const DivFilter = styled.div`
  padding: 20px 0;
  & > span {
    font-size: 14px;
  }
`;

export const DivButtons = styled.div`
  scroll-snap-type: x mandatory;
  overflow: auto;
  display: flex;
  padding: 20px 0;
  font-size: 12px;
  font-weight: 400;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonFilter = styled.button`
  scroll-snap-align: start;
  flex-shrink: 0;
  padding: 8px 45px;
  border-radius: 5px;
  background-color: var(--inputs);
  margin-right: 10px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;

  &.hamburger::before,
  &.pizza::before,
  &.sushi::before,
  &.fried-chicken::before,
  &.coffee::before,
  &.cake::before,
  &.salad::before {
    content: "";
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: center;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 20px 0 -30px;
  }

  &.hamburger::before {
    background-image: url(${hamburger});
  }

  &.pizza::before {
    background-image: url(${pizza});
  }

  &.sushi::before {
    background-image: url(${sushi});
  }

  &.fried-chicken::before {
    background-image: url(${fried_chicken});
  }

  &.salad::before {
    background-image: url(${salad});
  }

  &.cake::before {
    background-image: url(${cake});
  }

  &.coffee::before {
    background-image: url(${coffee});
  }

  &.mastercard::before {
    background-image: url(${mastercard});
  }

  &.paypal::before {
    background-image: url(${paypal});
  }

  &.visa::before {
    background-image: url(${visa});
  }

  &.american-express::before {
    background-image: url(${american_express});
  }

  &.active {
    background-color: var(--yellow);
  }

  &:last-child {
    margin-right: 0;
  }
`;
