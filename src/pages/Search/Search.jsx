import { HomeDiv } from "../../containers/Home/HomeStyles";
import { GlobalInput, IconGlobalInput } from "./SearchStyles";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { Navbar } from "../../components/Nav/Navbar";
import { FiSearch } from "react-icons/fi";

export function Search() {
  return (
    <div>
      <HomeDiv style={{ padding: "30px 20px", height: "90vh" }}>
        <form style={{ padding: "0 0 20px 0", position: "relative" }}>
          <IconGlobalInput><FiSearch /></IconGlobalInput>
          <GlobalInput placeholder="Search for a dish" />
        </form>
        <span style={{ fontSize: "15px", fontWeight: "600", padding: "0 0 10px 0", display: "block" }}>
          Recent searches
        </span>
        <h4 style={{ color: "var(--gray)", display: "flex", alignItems: "center", fontWeight: "400", gap: "5px" }}><BsArrowCounterclockwise /> Pizza</h4>
      </HomeDiv>
      <Navbar />
    </div>
  );
}
