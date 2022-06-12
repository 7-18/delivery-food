import { InputAdornment } from "@mui/material";
import logo from "../../../assets/images/Logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HeroDiv } from "../../Hero/HeroStyles";
import { Logo } from "../../LogoHome/LogoHomeStyles";
import {
  InputStyled,
  SignInBottom,
  SignInBottomP,
  SignInP,
  SignInTitle,
} from "./PhoneStyles";
import { ButtonStyled } from "../../Steps/StepsStyles";
import { useForm } from "../../../hooks/useForm";
import { getUsers } from "../../../services/getUsers";
import { useEffect, useState } from "react";
import { message } from "antd";

export const Phone = () => {
  const [users, setUsers] = useState([]);
  const [form, handleInputChange] = useForm({
    phone: "",
  });

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.phone == form.phone);
    if (form.phone.length <= 12) {
      if (!user) {
        localStorage.setItem("user", JSON.stringify({ phone: form.phone }));
        navigate("/sign-in/verification");
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/sign-in/verification");
      }
    } else if (form.phone === "") {
      message.error("Please enter a valid phone number");
    } else {
      message.error("Please enter a valid phone number");
    }
  };

  return (
    <HeroDiv style={{ justifyContent: "start", padding: "10px" }}>
      <Logo src={logo} alt="logo" style={{ backgroundColor: "transparent" }} />
      <SignInTitle>Sign In</SignInTitle>
      <SignInP>
        Login or create an account with your phone number to start ordering
      </SignInP>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <InputStyled
          onSubmit={handleSubmit}
          id="input-with-icon-adornment"
          type="number"
          placeholder="+1"
          startAdornment={
            <InputAdornment position="start">
              <BsTelephoneFill style={{ color: "var(--gray)" }} />
            </InputAdornment>
          }
          name="phone"
          onChange={handleInputChange}
        />
      </form>
      <SignInBottom style={{ padding: "33vh 5px 0 5px" }}>
        <SignInBottomP>
          By clicking the button next you accept <span>Terms of use</span>
        </SignInBottomP>
        <ButtonStyled
          style={{ marginBottom: "0" }}
          size="large"
          onClick={handleSubmit}
        >
          Login
        </ButtonStyled>
      </SignInBottom>
    </HeroDiv>
  );
};
