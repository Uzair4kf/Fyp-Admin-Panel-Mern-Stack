import SearchContext from "./SearchContext";

const SearchState = ({children}) => {
  
  return (
    <SearchContext.Provider value={state}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
