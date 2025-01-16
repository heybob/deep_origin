import { createContext } from "react";
import { IEditModeApi, ISearchCacheAPI } from "../Interfaces/interfaces";

export const DataTableContext = createContext<IEditModeApi>({editModeApi: [false, ()=>{},'']});
export const SearchCacheContext = createContext<ISearchCacheAPI>({searchCacheApi: [{}, ()=>{}]});
