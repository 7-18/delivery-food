import { HomeDiv } from "../../containers/Home/HomeStyles";
import { UserDiv } from "../../pages/UserProfile/UserProfileStyles";
import { GrEdit } from "react-icons/gr";
import { ButtonStyled } from "../Steps/StepsStyles";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRestaurants } from "../../hooks/useRestaurants";
import { IconGlobalInput } from "../../pages/Search/SearchStyles";
import { GlobalInput } from "../InputsButton/InputsButtonStyles";

export const EditAccount = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { back } = useRestaurants();

  return (
    <>
      <HomeDiv style={{ padding: "30px 20px", height: "100%" }}>
        <MdOutlineArrowBackIos style={{ fontSize: "18px" }} onClick={back} />
        <UserDiv>
          <h4>Profile</h4>
          <img src={user?.image} alt="" style={{ cursor: "pointer" }} />
        </UserDiv>
        <form style={{ position: "relative" }}>
          <IconGlobalInput style={{ right: "4%", top: "60%" }}>
            <GrEdit />
          </IconGlobalInput>
            <GlobalInput type="text" defaultValue={user?.name} />
        </form>
        <form style={{ position: "relative" }}>
          <IconGlobalInput style={{ right: "4%", top: "60%" }}>
            <GrEdit />
          </IconGlobalInput>
            <GlobalInput type="email" defaultValue={user?.email} />
        </form>
        <form style={{ position: "relative" }}>
          <IconGlobalInput style={{ right: "4%", top: "60%" }}>
            <GrEdit />
          </IconGlobalInput>
            <GlobalInput type="number" defaultValue={user?.phone} />
        </form>
        <form style={{ position: "relative" }}>
          <IconGlobalInput style={{ right: "4%", top: "60%" }}>
            <GrEdit />
          </IconGlobalInput>
            <GlobalInput type="text" defaultValue={user?.date_birthday} />
        </form>
        <ButtonStyled size="large" style={{ margin: "20vh 0 0 0" }}>
          Save
        </ButtonStyled>
      </HomeDiv>
    </>
  );
};
