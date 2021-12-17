import MainPageNav from "./MainPageNav/MainPageNav";
import Output from "../Output/Output";
import "./MainPage.css";
const MainPage = ({ user, handleLogout }) => {
  return (
    <section className="hero">
      <MainPageNav user={user} handleLogout={handleLogout} />
      <Output />
    </section>
  );
};
export default MainPage;
