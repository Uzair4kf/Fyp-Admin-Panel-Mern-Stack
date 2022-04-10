import SearchContext from "./SearchContext";

const SearchState = (props) => {
  const state = {
    name: "Lop",
  };
  return (
    <SearchContext.Provider value={state}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
