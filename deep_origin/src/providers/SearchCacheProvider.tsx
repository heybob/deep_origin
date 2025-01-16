import { useState, memo } from "react";
import { SearchCacheContext } from "../contexts/contexts";
import { IChildren, EmptyObj } from "../Interfaces/interfaces";

interface ISearchCacheAPI {
  searchCacheApi: [EmptyObj, React.Dispatch<any>];
}
function SearchCacheProvider({ children }: IChildren) {
  const [searchCache, setSearchCache] = useState({});
  const searchCacheApi: ISearchCacheAPI = {
    searchCacheApi: [searchCache, setSearchCache],
  };

  return (
    <SearchCacheContext.Provider value={searchCacheApi}>
      {children}
    </SearchCacheContext.Provider>
  );
}
export default memo(SearchCacheProvider);
