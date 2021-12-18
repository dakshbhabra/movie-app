import Container from "../../GlobalComponents/Container";
import MainPageNavLogo from "./MainPageNavLogo";
import MainPageNavLogOut from "./MainPageNavLogOut";
import MainPageNavSearch from "./MainPageNavSearch";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import "./MainPageNav.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const MainPageNav = ({ handleTheme, user, handleLogout }) => {
  // const a =  () => {
  //   console.log(user);
  // }
  // const {dark, setDark, handleTheme} = useContext(MovieContext);
  // useEffect(() => {
  //   const storedDark = (sessionStorage.getItem("setDark") || false);
  //   setDark(storedDark);
  // });

  // const handleOnChange = () => {
  //   setDark(!dark);
  //   sessionStorage.setItem("setDark", !dark);
  // };
  return (
    <nav className="nav">
      <Container className="container">
        <div className="wrapper">
          <MainPageNavLogo />
        </div>
        <MainPageNavSearch />
        <MainPageNavLogOut handleLogout={handleLogout} />
        {/* <button onClick={a}>click</button> */}
        <BrightnessLowIcon onClick={handleTheme} sx={{ color: "#fff", cursor:"pointer" }} />
        <img
          style={{
            maxHeight: "50px",
          }}
          src={`https://ui-avatars.com/api/?name=${user.email}&size=20&background=fff&color=f12819&length=1&rounded=true`}
        />
      </Container>
    </nav>
  );
};

export default MainPageNav;
