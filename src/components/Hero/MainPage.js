import MainPageNav from "./MainPageNav/MainPageNav";
import Output from "../Output/Output";
import "./MainPage.css";
const MainPage = ({ dark, handleTheme, user, handleLogout }) => {
  return (
    <section className={dark ? "dark" : "hero"}>
      <MainPageNav
        handleTheme={handleTheme}
        user={user}
        handleLogout={handleLogout}
      />
      <Output />
    </section>
  );
};
export default MainPage;
