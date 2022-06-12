import logo from "../../../assets/images/Logo.png";
import { HeroDiv } from "../../Hero/HeroStyles";
import { Logo } from "../../LogoHome/LogoHomeStyles";
import {
  SignInBottom,
  SignInBottomP,
  SignInP,
  SignInTitle,
} from "../Phone/PhoneStyles";
import { InputVerification, SpanVerify } from "./VerificationStyles";
import { ButtonStyled } from "../../Steps/StepsStyles";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";
import { getUsers } from "../../../services/getUsers";

export const Verification = () => {
  const [users, setUsers] = useState([]);
  const [form, handleInputChange] = useForm({
    verificationCode: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/sign-in");
    }
  }, []);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const userFind = users.find((us) => us.phone === user.phone);
    if (form.verificationCode.length < 4 || form.verificationCode === "") {
      message.error("Please enter a valid verification code. Send again?");
    } else {
      if (userFind) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, verificationCode: form.verificationCode })
        );
        message.success("Verification successful");
        navigate("/home");
      } else if (user) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, verificationCode: form.verificationCode })
        );
        message.success("Verification successful");
        navigate("/create-account");
      } else {
        navigate("/sign-in");
      }
    }
  };

  return (
    <HeroDiv style={{ justifyContent: "start", padding: "10px" }}>
      <Logo src={logo} alt="logo" style={{ backgroundColor: "transparent" }} />
      <SignInTitle>Verification</SignInTitle>
      <SignInP>
        Enter the four-digit code from SMS. SMS not received.{" "}
        <SpanVerify>Send again?</SpanVerify>
      </SignInP>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <InputVerification
          maxLength="4"
          type="number"
          name="verificationCode"
          onChange={handleInputChange}
        />
      </form>
      <SignInBottom>
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
