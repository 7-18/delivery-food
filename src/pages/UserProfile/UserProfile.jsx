import { HomeDiv } from "../../containers/Home/HomeStyles";
import { Navbar } from "../../components/Nav/Navbar";
import { UserDiv } from "./UserProfileStyles";
import { InputsButton } from "../../components/InputsButton/InputsButton";
import { FaRegUser, FaQuestionCircle } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { Switch } from "@mui/material";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ButtonStyled } from "../../components/Steps/StepsStyles";
import { Link, useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const loggedOut = () => {
    localStorage.removeItem("user");
    navigate("/sign-in");
  }

  const label = { inputProps: { 'aria-label': 'Account edit' } };
  return (
    <>
      <HomeDiv style={{ padding: "30px 20px", height: "100vh", marginBottom: "100px" }}>
        <UserDiv>
          <img src={user?.image} alt={user?.name} />
          <h4>{user?.name}</h4>
        </UserDiv>
        <Link to={`/user-account/edit-profile/${user?.id}`}><InputsButton title="Account edit" icon={<FaRegUser />} lastIcon={<MdOutlineArrowForwardIos  />}/></Link>
        <InputsButton title="Account edit" icon={<BiBell />} lastIcon={<Switch {...label} defaultChecked size="small" />}/>
        <InputsButton title="Payment" icon={<MdOutlinePayment />} lastIcon={<MdOutlineArrowForwardIos  />}/>
        <InputsButton title="Language" icon={<TbWorld />} lastIcon={<MdOutlineArrowForwardIos  />}/>
        <InputsButton title="Location" icon={<ImLocation />} lastIcon={<MdOutlineArrowForwardIos  />}/>
        <InputsButton title="FAQ" icon={<FaQuestionCircle />} lastIcon={<MdOutlineArrowForwardIos  />}/>
        <InputsButton title="Support" icon={<BsTelephoneFill />} lastIcon={<MdOutlineArrowForwardIos  />}/>
        <ButtonStyled style={{ backgroundColor: "#BB2D3B", color: "#fff" }} onClick={loggedOut}>Logout</ButtonStyled>
      </HomeDiv>
      <Navbar />
    </>
  );
};
