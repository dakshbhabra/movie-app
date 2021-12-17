import "./MainPageNavLogOut.css";

const MainPageNavLogOut = ({ handleLogout }) => {
  return (
    <div>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default MainPageNavLogOut;
