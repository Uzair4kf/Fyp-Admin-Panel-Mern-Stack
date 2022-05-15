import SearchContext from "./SearchContext";

const SearchState = ({ children }) => {
  return <SearchContext.Provider>{children}</SearchContext.Provider>;
};

export default SearchState;
