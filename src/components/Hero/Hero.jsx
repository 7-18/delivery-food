import { HeroDiv, HeroImg, HeroText } from "./HeroStyles"

export const Hero = ({img, description}) => {
  return (
    <HeroDiv>
      <HeroImg src={img} alt="hero" loading="lazy"/>
      <HeroText>{description}</HeroText>
    </HeroDiv>
  )}