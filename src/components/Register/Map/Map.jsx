import { HeroDiv, HeroText } from "../../Hero/HeroStyles";
import { SignInBottomP } from "../Phone/PhoneStyles";
import map from "../../../assets/images/map.png";
import { ButtonStyled } from "../../Steps/StepsStyles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LocationMap = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <HeroDiv style={{ padding: "60px 20px 0px", height: "100%" }}>
      <HeroText style={{ padding: "30px" }}>
        Allow access to geo data on the device mark your address on the map
      </HeroText>
      <img src={map} />
      <SignInBottomP
        style={{
          textAlign: "end",
          fontSize: "12px",
          width: "100%",
          marginTop: "10px",
        }}
      >
        Where I am?
      </SignInBottomP>
      <ButtonStyled size="large" style={{ marginTop: "10vh", marginBottom: "10px" }}>
        Confirm
      </ButtonStyled>
    </HeroDiv>
  );
};
