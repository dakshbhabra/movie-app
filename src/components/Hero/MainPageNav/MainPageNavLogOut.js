import "./MainPageNavLogOut.css";

const MainPageNavLogOut = ({ handleLogout }) => {
  return (
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
  );
};

export default MainPageNavLogOut;
