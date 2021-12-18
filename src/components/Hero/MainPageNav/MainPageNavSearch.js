import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import "./MainPageNavSearch.css";
const MainPageNavSearch = () => {
  const { search, setSearch, handleSearch } = useContext(MovieContext);
    // const showResult = (e) => {
    //   // console.log(e.target.value)
    //   e.preventDefault();
    //   setSearch(e.target.value);
    //   setTimeout(() => {
    //     handleSearch();
    //   }, 250);
    // }
  return (
    <form
      className="navSearch"
      onChange={handleSearch}
      onSubmit={handleSearch}
    >
      <input
        className="search"
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default MainPageNavSearch;
