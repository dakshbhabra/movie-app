import Container from "../../GlobalComponents/Container";
import MainPageNavLogo from "./MainPageNavLogo";
import MainPageNavLogOut from "./MainPageNavLogOut";
import MainPageNavSearch from "./MainPageNavSearch";
import "./MainPageNav.css";
const MainPageNav = ({ user, handleLogout }) => {
  // const a =  () => {
  //   console.log(user);
  // }
  return (
    <nav className="nav">
      <Container className="container">
        <div className="wrapper">
          <MainPageNavLogo />
        </div>
        <MainPageNavSearch />
        <MainPageNavLogOut handleLogout={handleLogout} />
        {/* <button onClick={a}>click</button> */}
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
