import { useGlobalContext } from "../context/Context";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.search.value);
    const newSearchTerm = e.target.elements.search.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <section className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="cat"
        />

        <input className="submit-btn" type="submit" value="Submit"></input>
      </form>
    </section>
  );
};
