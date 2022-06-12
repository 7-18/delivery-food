import { Box, FormControl, IconButton, InputAdornment } from "@mui/material";
import { message } from "antd";
import { useState, useEffect } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { ButtonStyled } from "../../Steps/StepsStyles";
import {
  DivCreateAccount,
  H2CreateAccount,
  InputCreateAccount,
  InputLabelCreateAccount,
} from "./CreateAcountStyles";

export const CreateAccount = () => {
  const [form, handleInputChange, reset] = useForm({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    password: "",
  });

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (form.name && form.email && form.password !== "") {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, name: form.name, email: form.email })
      );
      message.success("Your account has been created successfully!");
      navigate("/home");
    } else {
      message.error("Please fill all the fields");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <DivCreateAccount>
      <H2CreateAccount>Create account</H2CreateAccount>
      <Box autoComplete="off" component="form" onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabelCreateAccount htmlFor="standard-adornment-name">
            NAME
          </InputLabelCreateAccount>
          <InputCreateAccount
            id="standard-adornment-name"
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabelCreateAccount htmlFor="standard-adornment-email">
            EMAIL
          </InputLabelCreateAccount>
          <InputCreateAccount
            id="standard-adornment-email"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabelCreateAccount htmlFor="standard-adornment-password">
            PASSWORD
          </InputLabelCreateAccount>
          <InputCreateAccount
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            name="password"
            onChange={handleInputChange}
            placeholder="Enter your password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <ButtonStyled
          type="submit"
          style={{ marginTop: "35vh" }}
          size="large"
          onClick={handleSubmit}
        >
          Sign In
        </ButtonStyled>
      </Box>
    </DivCreateAccount>
  );
};
